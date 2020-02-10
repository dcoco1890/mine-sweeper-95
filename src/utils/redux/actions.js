import { PLANT_FLAG, CLICK_CELL, CREATE_GAME, REVEAL_BOARD } from "./constants";

// Minsweeper actions

export const clickCell = payload => ({
  type: CLICK_CELL,
  x: payload.x,
  y: payload.y,
  payload
});

export const plantFlag = payload => ({
  type: PLANT_FLAG,
  x: payload.x,
  y: payload.y,
  payload
});

export const setupGame = gameArray => ({
  type: CREATE_GAME,
  gameArray
});

export const revealBoard = gameArray => ({
  type: REVEAL_BOARD,
  gameArray
});
