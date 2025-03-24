import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'test@tms.com' && password === '123') {
      setLoggedIn(true);
    } else {
      alert('Wrong credentials');
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <>
          <h1>TMS Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h1>Welcome to TMS Dashboard</h1>
          <p>You are logged in!</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;