declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import Song from "./components/Song";
import { nickelback } from "./data";

ReactDOM.render(
  <>
    <Normalize />
    <Song {...nickelback} />
  </>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
