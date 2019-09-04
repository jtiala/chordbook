import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import { SettingsProvider } from "./contexts/Settings";

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <SettingsProvider>
    <Normalize />
    <App />
  </SettingsProvider>,
  document.getElementById("root")
);

serviceWorker.register();
