import { defineConfig } from 'cypress';

const baseUrl = process.env.CYPRESS_BASE_URL;
export default defineConfig({
  e2e: {
    baseUrl,
  },
  video: false,
});
