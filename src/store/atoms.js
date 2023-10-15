import { atom } from "recoil";

export const newsCategoryState = atom({
  key: "newsCategoryState",
  default: 1,
  // 1:경제 2:증권 3:부동산 4:기업/경영
});

export const basicCategoryState = atom({
  key: "basicCategoryState",
  default: 1,
  // 1:주식 기초 2:주식 투자 기법 3:위험성 4:경제 기초 지식
});

export const gptDragState = atom({
  key: "gptDragState",
  default: false,
});

export const rankModalOpenState = atom({
  key: "rankModalOpenState",
  default: false,
  // rank Modal 오픈 여부 확인
});
