// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Polling garante que alterações sejam detectadas neste disco (E:\ com espaços no caminho)
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
});
