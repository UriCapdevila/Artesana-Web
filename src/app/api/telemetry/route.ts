import { NextResponse } from 'next/server';
import type { TelemetryBatch } from '@/features/telemetry/services/telemetry.types';

/**
 * POST /api/telemetry
 * Receives telemetry event batches from the frontend.
 * Today: logs to console. Tomorrow: persists to database/analytics pipeline.
 */
export async function POST(request: Request) {
  try {
    const batch: TelemetryBatch = await request.json();

    // Validate basic structure
    if (!batch.batchId || !Array.isArray(batch.events)) {
      return NextResponse.json(
        { error: 'Invalid batch format' },
        { status: 400 }
      );
    }

    // ── Log for development ──
    console.log(
      `[Telemetry] Received batch ${batch.batchId} with ${batch.events.length} events`
    );

    // ── Future: Persist to database ──
    // await db.telemetryEvents.insertMany(batch.events);

    // ── Future: Forward to analytics pipeline ──
    // await analyticsQueue.enqueue(batch);

    return NextResponse.json({
      success: true,
      batchId: batch.batchId,
      eventsReceived: batch.events.length,
    });
  } catch (error) {
    console.error('[Telemetry] Error processing batch:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
