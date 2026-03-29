'use client';

import { useCallback, type ReactNode } from 'react';
import { useTrackView } from '../hooks/useTrackView';
import { telemetryService } from '../services/telemetry.service';
import type { TelemetryPayload } from '../services/telemetry.types';

interface TrackableProductProps {
  productId: string;
  productCategory?: string;
  productPrice?: number;
  source?: TelemetryPayload['source'];
  listPosition?: number;
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that adds automatic telemetry tracking to any product component.
 * - Tracks impression (when entering viewport)
 * - Tracks view duration
 * - Tracks clicks
 */
export function TrackableProduct({
  productId,
  productCategory,
  productPrice,
  source = 'grid',
  listPosition,
  children,
  className,
}: TrackableProductProps) {
  const ref = useTrackView<HTMLDivElement>({
    productId,
    productCategory,
    productPrice,
    source,
    listPosition,
  });

  const handleClick = useCallback(() => {
    telemetryService.track('product_click', {
      productId,
      productCategory,
      productPrice,
      source,
      listPosition,
    });
  }, [productId, productCategory, productPrice, source, listPosition]);

  return (
    <div ref={ref} onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
