declare let module: any;

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";

import ChordSheet from "./components/ChordSheet";

ReactDOM.render(
  <>
    <Normalize />
    <ChordSheet artist="Nickelback" song="How you remind me" />
  </>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
