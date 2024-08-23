import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.pcss"

import * as Sentry from "@sentry/vue";
import packageInfo from "../package.json";

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://d1e2c7045276967cdf0672f4b69bfaae@o4507825529880576.ingest.de.sentry.io/4507825573462096",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  release: window.__SENTRY_RELEASE__,
  logErrors: true,
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router)
app.mount('#app')
