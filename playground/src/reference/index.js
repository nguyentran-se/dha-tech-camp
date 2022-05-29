import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Reference() {
  return (
    <div className="challenge">
      <div className="navigation">
        <NavLink to="1">🚀 Reference 1</NavLink>
        <NavLink to="2">🚀 Reference 2</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Reference;
