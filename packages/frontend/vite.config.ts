import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Lynq",
        short_name: "Lynq",
        description: "Talk. Build. Belong.",
        theme_color: "#0d0e11",
        background_color: "#0d0e11",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "/favicon.svg", sizes: "192x192", type: "image/svg+xml", purpose: "any maskable" },
          { src: "/favicon.svg", sizes: "512x512", type: "image/svg+xml", purpose: "any maskable" }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/api"),
            handler: "NetworkFirst",
            options: { cacheName: "lynq-api" }
          },
          {
            urlPattern: ({ request }) => ["style", "script", "font", "image"].includes(request.destination),
            handler: "CacheFirst",
            options: { cacheName: "lynq-static" }
          }
        ]
      }
    })
  ],
  server: {
    port: 5173,
    strictPort: false
  },
  preview: {
    port: 4173,
    strictPort: true
  }
});
