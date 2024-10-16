/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";
import { defineConfig } from 'vite'

const PWAConfig: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {
    name: 'Vite config PWA',
    short_name: 'VitePWA',
    description: 'VitePWA with Vite',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    screenshots: [
      {
        src: '/img.png',
        sizes: '1308x1045',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Home Screen'
      },
      {
        src: '/img_1.png',
        sizes: '873x487',
        type: 'image/png',
        label: 'Logotype'
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    VitePWA(PWAConfig)
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
