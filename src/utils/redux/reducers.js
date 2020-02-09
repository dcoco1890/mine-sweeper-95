import { PLANT_FLAG, CLICK_CELL, CREATE_GAME, REVEAL_BOARD } from "./constants";
// import { combineReducers } from "redux";

const mineSweeping = (state = {}, action) => {
  //   console.log(state);
  switch (action.type) {
    case CREATE_GAME:
      return Object.assign({}, action.gameArray);
    case CLICK_CELL:
      //   console.log(action.payload.x);
      //   console.log(action.payload.y);
      let copy = state;
      copy[action.payload.x][action.payload.y].isRevealed = true;

      return Object.assign(
        {},
        state,
        (copy[action.payload.x][action.payload.y].isRevealed = true)
      );

    case PLANT_FLAG:
      return state;
    // Should loop through and turn every cell to revealed
    case REVEAL_BOARD:
      console.log("revealing");
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
