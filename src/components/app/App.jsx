import React from 'react';
import { orbCount } from '../../utils/utils';
import Orb from '../Orb/Orb';
import './App.css';

export const App = () => {
  const orbTotal = orbCount();
  const orbs = [];

  for(let i = 1; i < orbTotal + 1; i++) {
    orbs.push(<Orb />);
  }

  return (
    <main data-testid='app'>
      {orbs}
    </main>
  );
};

export default App;