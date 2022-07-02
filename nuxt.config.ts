import { defineNuxtConfig } from 'nuxt'
import dsv from '@rollup/plugin-dsv'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [dsv()]
  }
})
