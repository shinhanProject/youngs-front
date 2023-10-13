import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BasicKnowledgeList from "./pages/BasicKnowledgeList";
import PressReleaseList from "./pages/PressReleaseList";
import StockItemList from "./pages/StockItemList";
import Ranking from "./pages/Ranking";
import OnBoarding from "./pages/OnBoarding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basicknowledge" element={<BasicKnowledgeList />} />
        <Route path="/pressrelease" element={<PressReleaseList />} />
        <Route path="/stockitem" element={<StockItemList />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
