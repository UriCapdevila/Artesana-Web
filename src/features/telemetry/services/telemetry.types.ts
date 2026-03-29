export type TelemetryEventType =
  | 'product_view'
  | 'product_click'
  | 'product_detail_view'
  | 'product_add_to_cart'
  | 'product_remove_from_cart'
  | 'category_view'
  | 'search_query'
  | 'recommendation_click'
  | 'page_view'
  | 'session_start'
  | 'session_end';

export interface TelemetryEvent {
  eventType: TelemetryEventType;
  timestamp: string;
  sessionId: string;
  deviceId: string;
  payload: TelemetryPayload;
  context: TelemetryContext;
}

export interface TelemetryPayload {
  productId?: string;
  productCategory?: string;
  productPrice?: number;
  viewDurationMs?: number;
  scrollDepthPercent?: number;
  searchQuery?: string;
  quantity?: number;
  source?: 'grid' | 'carousel' | 'recommendation' | 'search' | 'detail';
  listPosition?: number;
}

export interface TelemetryContext {
  pageUrl: string;
  referrer: string;
  viewport: 'mobile' | 'tablet' | 'desktop';
  userAgent: string;
}

export interface TelemetryBatch {
  batchId: string;
  events: TelemetryEvent[];
  sentAt: string;
  clientVersion: string;
}
