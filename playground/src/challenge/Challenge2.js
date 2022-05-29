import React from "react";

const FAKE_USERNAME = "nguyentran";
const FAKE_PASSWORD = "123123";

function Challenge2() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username </label>
        <input type="text" id="username" />

        <label htmlFor="password">Password </label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
        <button type="button" className="btn-clear">
          Logout
        </button>
      </form>
    </div>
  );
}

export default Challenge2;
