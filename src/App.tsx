import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import GoogleSignInButton from './components/GoogleSignInButton';
import UserProfile from './components/UserProfile';
import './App.css';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '30px' }}>Firebase Login Test App</h1>
      <h3>(React Redux)</h3>
      {user ? <UserProfile /> : <GoogleSignInButton />}
    </div>
  );
};

export default App;