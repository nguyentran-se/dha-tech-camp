import React, { useState } from 'react';
import { fakeLoginApi } from '../utils';

function Challenge2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await fakeLoginApi(username, password);
      setIsLoggedIn(true);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  }

  const disabled = username === '' || password === '';
  if (loading) return <div className="lds-dual-ring"></div>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isLoggedIn ? (
          <>
            <h4>Hi {username}! Welcome to DataHouse</h4>
            <button type="button" onClick={handleLogout} className="btn-clear">
              Logout
            </button>
          </>
        ) : (
          <>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={disabled}>
              Login
            </button>
          </>
        )}
      </form>
      <span style={{ color: 'salmon' }}>{error}</span>
    </div>
  );
}

export default Challenge2;
