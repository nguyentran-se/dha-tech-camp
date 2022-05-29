import React, { useState } from "react";

const FAKE_USERNAME = "admin";
const FAKE_PASSWORD = "123";

function Challenge2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (username === FAKE_USERNAME && password === FAKE_PASSWORD) {
      setIsLoggedIn(true);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  }
  const disabled = username === "" || password === "";
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLoggedIn ? (
          <button type="button" onClick={handleLogout} className="btn-clear">
            Logout
          </button>
        ) : (
          <button type="submit" disabled={disabled}>
            Login
          </button>
        )}
      </form>
    </div>
  );
}

export default Challenge2;
