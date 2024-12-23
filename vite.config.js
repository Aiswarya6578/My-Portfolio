// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   // base: "./dist/",
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom'],
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})