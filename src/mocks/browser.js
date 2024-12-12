// src/mocks/browser.js
// import { setupWorker } from "msw";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
// export const worker = setupWorker(...handlers);

export const setUpMocks = async () => {
  if (typeof window !== "undefined") {
    const { setupWorker } = await import("msw/browser");

    const worker = setupWorker(...handlers);
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js", // Adjust the path as needed
        options: {
          // Configure the Service Worker to use a self-signed certificate
          // This is generally not recommended for production environments
          selfSignedCertificate: true,
        },
      },
    });
  }
};
