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

export const rankUserState = atom({
  key: "rankUserState",
  default: 1,
  // rank 유저 primary Key
});

export const rankModalOpenState = atom({
  key: "rankModalOpenState",
  default: false,
  // rank Modal 오픈 여부 확인
});

export const rankUsernameState = atom({
  key: "rankUsernameState",
  default: "none",
  // rank Modal 오픈 여부 확인
});
