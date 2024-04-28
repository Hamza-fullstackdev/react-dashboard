import React from "react";
import Sidenav from "../components/Sidenav";
import Main from "../components/Main";
import Rightbar from "../components/Rightbar";

const Dashboard = () => {
  return (
    <div className="flex flex-row justify-between align-start">
      <Sidenav />
      <Main />
      <Rightbar/>
    </div>
  );
};

export default Dashboard;
