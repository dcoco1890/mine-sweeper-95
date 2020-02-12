import {
  PLANT_FLAG,
  CLICK_CELL,
  CREATE_GAME,
  REVEAL_BOARD,
  CHANGE_SIZE,
  REMOVE_FLAG
} from "./constants";
import { combineReducers } from "redux";
import Help from "../help-func/index";

// *****************************************************************
//
//                    Helper Functions
//
// *****************************************************************
// Makes the reducers less verbose, stolen from redux docs
const updateObject = (oldObj, newVals) => {
  return Object.assign({}, oldObj, newVals);
};

// abstracting the click thing here to make reducer less verbose
const clickHelper = (state, x, y) => {
  let copy = state;
  copy[x][y].isRevealed = true;
  if (copy[x][y].isEmpty) {
    copy = Help.revealSquares(x, y, copy);
  }
  return copy;
};

// gets called on plant and remove flag. Either way should switch the isFlag value
const flagHelper = (state, x, y) => {
  let copy = state;
  if (copy[x][y].isRevealed) {
    return state;
  } else if (copy[x][y].isFlag) {
    copy[x][y].isFlag = false;
  } else {
    copy[x][y].isFlag = true;
  }
  return copy;
};
// same as the others, abstracts the revealer
const revealHelper = state => {
  let obj = state;
  Object.entries(obj).forEach(([key, value]) => {
    return value.map(item => (item.isRevealed = true));
  });
  return obj;
};

// *****************************************************************
//
//                     Actual Reducers
//
// *****************************************************************

// Adds or removes items from an array of flag values
// I think this could be useful in determining a win
const flagValReducer = (state = [], action) => {
  if (action.type === PLANT_FLAG) {
    console.log(state);
    return state.concat([[action.payload.x, action.payload.y]]);
  } else if (action.type === REMOVE_FLAG) {
    return state.slice(0, state.length - 1);
  } else {
    return state;
  }
};

const gameArrayReducer = (state = [], action) => {
  let newArr;
  switch (action.type) {
    case CREATE_GAME:
      return updateObject(state, action.gameArray);
    case CLICK_CELL:
      newArr = clickHelper(state, action.payload.x, action.payload.y);
      return updateObject(state, newArr);
    case PLANT_FLAG:
    case REMOVE_FLAG:
      newArr = flagHelper(state, action.payload.x, action.payload.y);
      return updateObject(state, newArr);
    case REVEAL_BOARD:
      newArr = revealHelper(state);
      return updateObject(newArr);
    default:
      return state;
  }
};

const gameDataReducer = (state = {}, action) => {
  let flags = 0;

  switch (action.type) {
    case CHANGE_SIZE:
      // Something that changes the size, we could add a mine changer too
      return state;
    case PLANT_FLAG:
      flags = state.flagsPlanted;
      flags++;
      return updateObject(state, { flagsPlanted: flags });
    case REMOVE_FLAG:
      flags = state.flagsPlanted;
      flags--;
      return updateObject(state, { flagsPlanted: flags });
    default:
      return state;
  }
};

const mineSweeping = combineReducers({
  gameArray: gameArrayReducer,
  flagVals: flagValReducer,
  gameData: gameDataReducer
});

export default mineSweeping;
