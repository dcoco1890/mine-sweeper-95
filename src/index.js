import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mineSweeping from "../src/utils/redux/reducers";
import Game from "./components/Game";
import "./index.css";

const store = createStore(mineSweeping);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
