import { atom } from "recoil";

export const newsCategoryState = atom({
  key: "newsCategoryState",
  default: 1,
  // 1:경제 2:증권 3:부동산 4:기업/경영
});

export const gptDragState = atom({
  key: "gptDragState",
  default: false,
});
