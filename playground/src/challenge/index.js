import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Challenge() {
  return (
    <div className="challenge">
      <div className="navigation" style={{ marginBottom: 30 }}>
        <NavLink to="1">💪 Challenge 1</NavLink>
        <NavLink to="2">💪 Challenge 2</NavLink>
        <NavLink to="3">💪 Challenge 3</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Challenge;
