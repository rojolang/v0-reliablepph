declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    fbq: (
      command: string,
      event: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: Array<Record<string, any>>;
  }
}

export {};
