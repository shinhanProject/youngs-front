import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const basicCategoryState = atom({
  key: "basicCategoryState",
  default: 1,
  // 1:경제 기초 지식 2:주식 투자 기법 3:위험성 4:주식 기초
});

export const newsCategoryState = atom({
  key: "newsCategoryState",
  default: 1,
  // 1:경제 2:증권 3:부동산 4:기업/경영
});

export const gptDragState = atom({
  key: "gptDragState",
  default: false,
});

export const gptDragStateStock = atom({
  key: "gptDragStateStock",
  default: false,
});

export const rankModalOpenState = atom({
  key: "rankModalOpenState",
  default: false,
  // rank Modal 오픈 여부 확인
});

export const alreadyLearn = atom({
  key: "alreadyLearn",
  default: false,
  // 공부한 내용 안보기. default : 기능 안 킴
});

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const loginState = atom({
  key: "loginState",
  default: {
    isLogin: false,
    userInfo: {
      userSeq: -999,
      email: "",
      nickname: "",
      profile: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});

export const privateSummary = atom({
  key: "privateSummary",
  default: false,
  // 요약 나만 보기 true
});

export const summaryContent = atom({
  key: "summaryContent",
  default: "summary",
  // 요약 내용
});

export const followCheck = atom({
  key: "followCheck",
  default: -1,
  effects_UNSTABLE: [persistAtom],
});

export const searchStock = atom({
  key: "searchStock",
  default: "",
  // 요약 내용
});
