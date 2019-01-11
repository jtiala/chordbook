declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import * as serviceWorker from "./serviceWorker";

import { SettingsProvider } from "./contexts/Settings";

import App from "./components/App";

ReactDOM.render(
  <SettingsProvider>
    <Normalize />
    <App />
  </SettingsProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

serviceWorker.register();
