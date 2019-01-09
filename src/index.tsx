declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import Song from "./components/Song";
import { SettingsProvider } from "./contexts/Settings";
import { nickelback } from "./data";

ReactDOM.render(
  <SettingsProvider>
    <Normalize />
    <Song {...nickelback} />
  </SettingsProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
