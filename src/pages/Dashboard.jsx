import React from "react";
import Sidenav from "../components/Sidenav";
import Main from "../components/Main";

const Dashboard = () => {
  return (
    <div className="flex flex-row justify-between align-start">
      <Sidenav />
      <Main />
    </div>
  );
};

export default Dashboard;
