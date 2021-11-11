/**
 * @type {import('vite').UserConfig}
 */
const { resolve } = require('path');


const config = {
  root: './src',
  server: {
    host: '0.0.0.0',
  },
  build: {
    emptyOutDir: false,
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        english: resolve(__dirname, 'src/en.html'),
        privacy: resolve(__dirname, 'src/privacy-policy.html'),
      }
    }
  },
};

export default config;
