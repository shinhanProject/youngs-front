import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BasicKnowledgeList from "./pages/BasicKnowledgeList";
import BasicKnowledgeDetail from "./pages/BasicKnowledgeDetail";
import PressReleaseList from "./pages/PressReleaseList";
import StockItemList from "./pages/StockItemList";
import StockItemDetail from "./pages/StockItemDetail";
import PressReleaseDetail from "./pages/PressReleaseDetail";
import Ranking from "./pages/Ranking";
import OnBoarding from "./pages/OnBoarding";
import MyPage from "./pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basicknowledge" element={<BasicKnowledgeList />} />
        <Route
          path="/bsdetail/:category/:id"
          element={<BasicKnowledgeDetail />}
        />

        <Route path="/pressrelease" element={<PressReleaseList />} />
        <Route
          path="/prdetail/:category/:id"
          element={<PressReleaseDetail />}
        />

        <Route path="/stockitem" element={<StockItemList />} />
        <Route path="/stdetail/:id" element={<StockItemDetail />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/mypage/:id" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
