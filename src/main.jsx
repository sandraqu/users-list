import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { setUpMocks } from "./mocks/browser";
setUpMocks();
// worker.start();

// async function enableMocking() {
//   if (process.env.NODE_ENV !== "development") {
//     return;
//   }

//   const { worker } = await import("./mocks/browser");

//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start();
// }

// enableMocking().then(() =>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// );
