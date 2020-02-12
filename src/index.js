import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mineSweeping from "../src/utils/redux/reducers";
import Game from "./components/Game";
import "./index.css";
import Help from "../src/utils/help-func/index";

// setting an initial state and passing it to Create Store
const initialState = {
  gameData: {
    rows: 10,
    cols: 10,
    mines: 20,
    flagsPlanted: 0
  },
  flagVals: [],
  // Hard Code Initial Values
  gameArray: Help.createCellData(10, 10, 20)
};

const store = createStore(mineSweeping, initialState);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);
