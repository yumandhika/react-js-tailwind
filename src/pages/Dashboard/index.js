import React from "react";
import _ from "lodash";
import { CountdownTimer, CustomHeader, Footer } from "components";

const Dashboard = () => {
  return (
    <div className="w-full space-y-4">
      <CountdownTimer/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
