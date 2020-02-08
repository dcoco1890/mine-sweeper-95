import { PLANT_FLAG, CLICK_CELL, CREATE_GAME } from "./constants";
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
    default:
      return state;
  }
};

export default mineSweeping;
