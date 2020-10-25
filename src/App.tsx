import React, { useState } from 'react';

import { clientLogin } from './auth';
import apolloClient from './apollo'

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => clientLogin(apolloClient, { username, password })}>LOGIN</button>
    </div>
  );
}

export default App;
