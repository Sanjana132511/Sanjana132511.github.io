
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   port:3000,

//   plugins: [
//     tailwindcss(),
//   ],

// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() ,
  tailwindcss()
  ],
  server:{
    port:4000
  }
})

