import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // เปลี่ยนเป็นชื่อ Repository ของคุณ (ใช้แค่ชื่อ repo ครอบด้วย / /)
  base: 'weight-slip-app', 
})