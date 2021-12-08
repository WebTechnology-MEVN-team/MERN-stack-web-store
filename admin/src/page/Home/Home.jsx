import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Dashboard from "../Dashboard/Dashboard";

function Home() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
