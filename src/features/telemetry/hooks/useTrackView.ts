'use client';

import { useEffect, useRef } from 'react';
import { telemetryService } from '../services/telemetry.service';
import type { TelemetryPayload } from '../services/telemetry.types';

interface UseTrackViewOptions {
  productId: string;
  productCategory?: string;
  productPrice?: number;
  source?: TelemetryPayload['source'];
  listPosition?: number;
  /** Visibility threshold (0-1) to count as "seen". Default: 0.5 */
  threshold?: number;
}

/**
 * Hook that tracks when a component enters the viewport and how long it stays visible.
 * Uses IntersectionObserver — no polling, no media queries.
 */
export function useTrackView<T extends HTMLElement>(options: UseTrackViewOptions) {
  const ref = useRef<T>(null);
  const entryTimeRef = useRef<number | null>(null);
  const hasTrackedImpression = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entryTimeRef.current = Date.now();

          // Track first impression
          if (!hasTrackedImpression.current) {
            telemetryService.track('product_view', {
              productId: options.productId,
              productCategory: options.productCategory,
              productPrice: options.productPrice,
              source: options.source,
              listPosition: options.listPosition,
            });
            hasTrackedImpression.current = true;
          }
        } else if (entryTimeRef.current) {
          // Element left viewport → calculate duration
          const duration = Date.now() - entryTimeRef.current;
          if (duration > 1000) {
            // Only track if visible for more than 1 second
            telemetryService.track('product_view', {
              productId: options.productId,
              viewDurationMs: duration,
              source: options.source,
            });
          }
          entryTimeRef.current = null;
        }
      },
      { threshold: options.threshold ?? 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.productId, options.productCategory, options.productPrice, options.source, options.listPosition, options.threshold]);

  return ref;
}
