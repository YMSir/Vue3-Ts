import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), viteMockServe() ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      },
      {
        find: '#',
        replacement: pathResolve('types')
      }
    ]
  },
  build: {
    outDir: 'app'
  }
});
