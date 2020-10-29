import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { clientLogin } from './auth';
import apolloClient from './apollo';

console.log(localStorage.getItem('auth'));
const App: React.FC = () => {
  const ME = gql`
    query me {
      me {
        customer {
          firstName
          lastName
        }
      }
    }
  `;
  const { data } = useQuery(ME);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <input
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => clientLogin(apolloClient, { username, password })}>
        LOGIN
      </button>
    </div>
  );
};

export default App;
