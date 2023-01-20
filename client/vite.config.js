import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import mkcert from'vite-plugin-mkcert' // problem s sudo pass
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //https: true
  },
  plugins: [react(), svgr()] //mkcert()],
})
