import { PLANT_FLAG, CLICK_CELL, CREATE_GAME } from "./constants";
// import { combineReducers } from "redux";

const mineSweeping = (state = {}, action) => {
  switch (action.type) {
    case CLICK_CELL:
      return Object.assign({}, state, {
        isRevealed: true
      });
    case PLANT_FLAG:
      return state;
    default:
      return state;
  }
};

export default mineSweeping;

// const rootReducer = combineReducers({
//     mineSweeping,
//     null
// })
