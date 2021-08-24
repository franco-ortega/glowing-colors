import React from 'react';
import { orbCount } from '../../utils/utils';
import Orb from '../Orb/Orb';
import './Global.css';
import styles from './App.module.css';

export const App = () => {
  const orbTotal = orbCount();
  const orbs = [];

  for(let i = 1; i < orbTotal + 1; i++) {
    orbs.push(<Orb key={i} />);
  }

  return (
    <main
      className={styles.App}
      data-testid='app'
    >
      {orbs}
    </main>
  );
};

export default App;