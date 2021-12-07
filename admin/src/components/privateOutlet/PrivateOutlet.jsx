import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateOutlet() {
  const token = window.localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
