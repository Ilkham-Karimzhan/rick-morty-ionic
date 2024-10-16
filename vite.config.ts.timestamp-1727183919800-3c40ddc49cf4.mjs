// vite.config.ts
import legacy from "file:///C:/Users/Avrora/Documents/projects/rickMorty/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.31.6_vite@5.2.13_@types+node@22.5.2_terser@5.31.6_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vue from "file:///C:/Users/Avrora/Documents/projects/rickMorty/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.2.13_@types+node@22.5.2_terser@5.31.6__vue@3.4.38_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { VitePWA } from "file:///C:/Users/Avrora/Documents/projects/rickMorty/node_modules/.pnpm/vite-plugin-pwa@0.20.2_vite@5.2.13_@types+node@22.5.2_terser@5.31.6__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/Avrora/Documents/projects/rickMorty/node_modules/.pnpm/vite@5.2.13_@types+node@22.5.2_terser@5.31.6/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\Avrora\\Documents\\projects\\rickMorty";
var PWAConfig = {
  registerType: "autoUpdate",
  outDir: "dist",
  manifest: {
    name: "Vite config PWA",
    short_name: "VitePWA",
    description: "VitePWA with Vite",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    screenshots: [
      {
        src: "/img.png",
        sizes: "1308x1045",
        type: "image/png",
        form_factor: "wide",
        label: "Home Screen"
      },
      {
        src: "/img_1.png",
        sizes: "873x487",
        type: "image/png",
        label: "Logotype"
      }
    ]
  }
};
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    legacy(),
    VitePWA(PWAConfig)
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBdnJvcmFcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzXFxcXHJpY2tNb3J0eVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQXZyb3JhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c1xcXFxyaWNrTW9ydHlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0F2cm9yYS9Eb2N1bWVudHMvcHJvamVjdHMvcmlja01vcnR5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7Vml0ZVBXQSwgVml0ZVBXQU9wdGlvbnN9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmNvbnN0IFBXQUNvbmZpZzogUGFydGlhbDxWaXRlUFdBT3B0aW9ucz4gPSB7XG4gIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICBvdXREaXI6ICdkaXN0JyxcbiAgbWFuaWZlc3Q6IHtcbiAgICBuYW1lOiAnVml0ZSBjb25maWcgUFdBJyxcbiAgICBzaG9ydF9uYW1lOiAnVml0ZVBXQScsXG4gICAgZGVzY3JpcHRpb246ICdWaXRlUFdBIHdpdGggVml0ZScsXG4gICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgfVxuICAgIF0sXG4gICAgc2NyZWVuc2hvdHM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnL2ltZy5wbmcnLFxuICAgICAgICBzaXplczogJzEzMDh4MTA0NScsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBmb3JtX2ZhY3RvcjogJ3dpZGUnLFxuICAgICAgICBsYWJlbDogJ0hvbWUgU2NyZWVuJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnL2ltZ18xLnBuZycsXG4gICAgICAgIHNpemVzOiAnODczeDQ4NycsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBsYWJlbDogJ0xvZ290eXBlJ1xuICAgICAgfVxuICAgIF1cbiAgfVxufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGxlZ2FjeSgpLFxuICAgIFZpdGVQV0EoUFdBQ29uZmlnKVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFRLGVBQThCO0FBQ3RDLFNBQVMsb0JBQW9CO0FBTjdCLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sWUFBcUM7QUFBQSxFQUN6QyxjQUFjO0FBQUEsRUFDZCxRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFFBQVEsU0FBUztBQUFBLEVBQ25CO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
