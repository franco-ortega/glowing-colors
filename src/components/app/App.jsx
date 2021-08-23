import React from 'react';
import Orb from '../Orb/Orb';
import './App.css';

export const App = () => {
  return (
    <main data-testid='app'>
      <Orb />
      <Orb />
    </main>
  );
};

export default App;