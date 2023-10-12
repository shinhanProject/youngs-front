import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import BasicKnowledgeList from "./pages/BasicKnowledgeList";
import Ranking from "./pages/Ranking";
import OnBoarding from "./pages/OnBoarding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basicknowledgelist" element={<BasicKnowledgeList />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
