import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ↓ このserverブロックを追記します
  server: {
    host: true // '0.0.0.0'と同じ意味で、外部からのアクセスを許可する
  }
})