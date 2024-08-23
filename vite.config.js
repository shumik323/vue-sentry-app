import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import packageInfo from './package.json';

import dotenv from 'dotenv'

dotenv.config()

const path = require("path");
require("dotenv")
  .config({ path: path.resolve(__dirname, ".env.local") });

const viteSentryConfig = {
  authToken: process.env.VITE_DEV,
  org: 'student-0cy',
  project: 'sentry-vue',
  release: {
    name: `${packageInfo.name}@${packageInfo.version}`,
  },
  setCommits: '',
  sourceMaps: {
    include: ["./dist/assets/"],
    ignore: ["node_modules"],
    urlPrefix:"~/assets"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    sentryVitePlugin(viteSentryConfig),
  ],
  build: {
    sourcemap: "hidden",
  },
  define: {
    __SENTRY_RELEASE__: `'${packageInfo.name}@${packageInfo.version}'`,
  }
});
