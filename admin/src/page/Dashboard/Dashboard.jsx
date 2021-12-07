import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Home from "../Home/Home";

function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default Dashboard;
