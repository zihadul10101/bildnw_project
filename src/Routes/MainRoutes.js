import React from "react";
import { Route, Routes } from "react-router-dom";
import ActionCenter from "../component/pages/action-center/ActionCenter";
import Billings from "../component/pages/billings/Billings";
import Loans from "../component/pages/loans/Loans";
import OverviewMain from "../component/pages/overview/OverviewMain";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={<OverviewMain />} />
      <Route path="/action-center" element={<ActionCenter />} />
      <Route path="/loans" element={<Loans />} />
      <Route path="/billings" element={<Billings />} />
    </Routes>
  );
};

export default MainRoutes;
