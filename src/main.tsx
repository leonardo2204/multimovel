import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PostHogProvider } from "posthog-js/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
