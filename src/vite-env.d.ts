/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VENUE_MARKER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
