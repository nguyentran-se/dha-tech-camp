import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Playground() {
  return (
    <div className="challenge">
      <div className="navigation">
        <NavLink to="counter">🎮 Counter</NavLink>
        <NavLink to="form">🎮 Form</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Playground;
