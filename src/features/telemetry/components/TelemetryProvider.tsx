'use client';

import { useEffect } from 'react';
import { telemetryService } from '../services/telemetry.service';

/**
 * Component that initializes the TelemetryService on mount.
 * Place this in the root layout to start tracking automatically.
 */
export function TelemetryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    telemetryService.init();
    return () => telemetryService.destroy();
  }, []);

  return <>{children}</>;
}
