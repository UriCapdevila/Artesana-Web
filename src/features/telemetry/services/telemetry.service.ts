import type {
  TelemetryEvent,
  TelemetryBatch,
  TelemetryPayload,
  TelemetryEventType,
  TelemetryContext,
} from './telemetry.types';
import { TELEMETRY_URL, CLIENT_VERSION } from '@/shared/lib/constants';

const BATCH_SIZE = 10;
const FLUSH_INTERVAL_MS = 30_000;

class TelemetryService {
  private buffer: TelemetryEvent[] = [];
  private sessionId: string = '';
  private deviceId: string = '';
  private flushTimer: ReturnType<typeof setInterval> | null = null;
  private initialized = false;

  /** Initialize the service — call once in root layout */
  init() {
    if (this.initialized || typeof window === 'undefined') return;

    this.sessionId = this.generateId();
    this.deviceId = this.getOrCreateDeviceId();
    this.initialized = true;

    // Periodic flush
    this.flushTimer = setInterval(() => this.flush(), FLUSH_INTERVAL_MS);

    // Flush on tab close (sendBeacon for reliability)
    window.addEventListener('beforeunload', () => this.flush(true));
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') this.flush(true);
    });

    this.track('session_start', {});
  }

  /** Track an event */
  track(eventType: TelemetryEventType, payload: TelemetryPayload) {
    if (typeof window === 'undefined') return;

    const event: TelemetryEvent = {
      eventType,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      deviceId: this.deviceId,
      payload,
      context: this.getContext(),
    };

    this.buffer.push(event);

    if (this.buffer.length >= BATCH_SIZE) {
      this.flush();
    }
  }

  /** Send buffered events to backend */
  async flush(useBeacon = false) {
    if (this.buffer.length === 0) return;

    const batch: TelemetryBatch = {
      batchId: this.generateId(),
      events: [...this.buffer],
      sentAt: new Date().toISOString(),
      clientVersion: CLIENT_VERSION,
    };

    this.buffer = [];

    const payload = JSON.stringify(batch);

    if (useBeacon && typeof navigator.sendBeacon === 'function') {
      navigator.sendBeacon(TELEMETRY_URL, payload);
      return;
    }

    try {
      await fetch(TELEMETRY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      });
    } catch (error) {
      // Re-queue events on failure
      console.warn('[Telemetry] Flush failed, re-queuing events', error);
      this.buffer = [...batch.events, ...this.buffer];
    }
  }

  /** Destroy the service */
  destroy() {
    if (!this.initialized) return;
    this.track('session_end', {});
    this.flush(true);
    if (this.flushTimer) clearInterval(this.flushTimer);
    this.initialized = false;
  }

  private getContext(): TelemetryContext {
    if (typeof window === 'undefined') {
      return { pageUrl: '', referrer: '', viewport: 'desktop', userAgent: '' };
    }
    const width = window.innerWidth;
    return {
      pageUrl: window.location.href,
      referrer: document.referrer,
      viewport: width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop',
      userAgent: navigator.userAgent.substring(0, 100),
    };
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }

  private getOrCreateDeviceId(): string {
    if (typeof window === 'undefined') return 'server';
    const key = 'artesana_device_id';
    let id = localStorage.getItem(key);
    if (!id) {
      id = this.generateId();
      localStorage.setItem(key, id);
    }
    return id;
  }
}

export const telemetryService = new TelemetryService();
