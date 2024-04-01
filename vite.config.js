import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/


const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicons/BSTU_180.png','favicons/BSTU_192.png','favicons/BSTU_512.png'],
  manifest:{
    name:"Расписание ФИТ-2-5",
    short_name:"Расписание",
    description:"Список занятий для 5 группы 1 подгруппы БГТУ. PWA пока что в тестовом режиме",
    icons:[{
      src: 'favicons/BSTU_192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
      {
        src:'favicons/BSTU_512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: 'favicons/BSTU_180.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: 'favicons/BSTU_512.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    theme_color:'#8CDC8CFF',
    background_color:'#121912',
    display:"standalone",
    scope:'/scheduler',
    start_url:"/scheduler",
    orientation:'portrait'
  }
}
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
  base: '/scheduler/'
})
