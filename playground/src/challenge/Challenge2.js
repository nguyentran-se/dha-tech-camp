import React, { useState } from 'react';
import { fakeLoginApi } from '../utils';
/**
 * 1. setup FAKE_USERNAME and FAKE_PASSWORD in .env
 * 2. Handle login success and failure.
 * 3. Handle loading and error.
 */
function Challenge2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    // fakeLoginApi(username, password);
  }

  // const LoadingIndicator = <div className="lds-dual-ring"></div>

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <h4>Hi {username}! Welcome to DataHouse</h4> */}

        <label htmlFor="username">Username </label>
        <input type="text" id="username" />

        <label htmlFor="password">Password </label>
        <input type="password" id="password" />

        <button type="submit" disabled>Login</button>
        {/* <button type="button" className="btn-clear">
          Logout
        </button> */}
      </form>
        {/* <span style={{ color: 'salmon' }}>{error}</span> */}
    </div>
  );
}

export default Challenge2;
