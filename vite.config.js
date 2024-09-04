import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        lib: {
            name: 'str_vue_route',
            entry: path.resolve(__dirname, 'src/main.js'),
            formats: ['es', 'umd'],
            fileName: (format) => `str_vue_route.${format}.js`
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
