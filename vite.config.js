import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/website-3.0/',
//   plugins: [tailwindcss()],
    build: {
        outDir: 'docs', // Changes output from 'dist' to 'docs'
  },
})