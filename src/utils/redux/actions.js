import { PLANT_FLAG, CLICK_CELL, CREATE_GAME } from "./constants";

// Minsweeper actions

export const clickCell = payload => ({
  type: CLICK_CELL,
  x: payload.x,
  y: payload.y,
  payload
});

export const plantFlag = payload => ({
  type: PLANT_FLAG,
  payload
});

export const setupGame = gameArray => ({
  type: CREATE_GAME,
  gameArray
});
