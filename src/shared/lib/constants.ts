// ── API Configuration ──
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '';
export const TELEMETRY_URL = process.env.NEXT_PUBLIC_TELEMETRY_URL ?? '/api/telemetry';

// ── Contact ──
export const WHATSAPP_NUMBER = '34600000000';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = 'hola@artesana.com';
export const INSTAGRAM_HANDLE = '@artesana_handmade';
export const INSTAGRAM_URL = '#'; // Replace with real URL

// ── App ──
export const APP_NAME = 'Artesana';
export const APP_TAGLINE = 'El Alma en Cada Detalle';
export const CLIENT_VERSION = '1.0.0';

// ── Feature Flags ──
export const FEATURES = {
  CART_ENABLED: true,
  TELEMETRY_ENABLED: true,
  AI_RECOMMENDATIONS_ENABLED: false,
} as const;
