import { PLANT_FLAG, CLICK_CELL, CREATE_GAME } from "./constants";

// Minsweeper actions

export const clickCell = payload => ({
  type: CLICK_CELL,
  payload
});

export const plantFlag = payload => ({
  type: PLANT_FLAG,
  payload
});

export const 
