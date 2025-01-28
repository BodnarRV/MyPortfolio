import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);
