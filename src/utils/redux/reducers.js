import { PLANT_FLAG, CLICK_CELL, CREATE_GAME, REVEAL_BOARD } from "./constants";
import Help from "../help-func/index";
import { combineReducers } from "redux";

const initialState = {
  gameData: {
    rows: 10,
    cols: 10,
    mines: 20,
    flagsPlanted: 0
  },
  // Hard Code Initial Values
  gameArray: Help.createCellData(10, 10, 20)
};

const mineSweeping = (state = {}, action) => {
  //   console.log(state);
  switch (action.type) {
    case CREATE_GAME:
      return Object.assign({}, action.gameArray);

    case CLICK_CELL:
      let copy = state;
      copy[action.payload.x][action.payload.y].isRevealed = true;
      if (copy[action.payload.x][action.payload.y].isEmpty) {
        copy = Help.revealSquares(action.payload.x, action.payload.y, copy);
        return Object.assign({}, state, copy);
      } else {
        return Object.assign(
          {},
          state,
          (copy[action.payload.x][action.payload.y].isRevealed = true)
        );
      }

    case PLANT_FLAG:
      let newState = state;
      if (newState[action.payload.x][action.payload.y].isRevealed) {
        return state;
      } else if (newState[action.payload.x][action.payload.y].isFlag) {
        newState[action.payload.x][action.payload.y].isFlag = false;
        return Object.assign({}, state, newState);
      } else {
        newState[action.payload.x][action.payload.y].isFlag = true;
        return Object.assign({}, state, newState);
      }

    case REVEAL_BOARD:
      let obj = state;
      Object.entries(obj).forEach(([key, value]) => {
        return value.map(item => (item.isRevealed = true));
      });
      return Object.assign({}, obj);
    default:
      return state;
  }
};

export default mineSweeping;
