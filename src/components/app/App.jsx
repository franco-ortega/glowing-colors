import React, {
  useEffect, 
  useState 
} from 'react';
import { orbCount } from '../../utils/utils';
import Orb from '../Orb/Orb';
import './Global.css';
import styles from './App.module.css';
import Welcome from '../welcome/Welcome';

export const App = () => {
  const [orbs, setOrbs] = useState([]);
  const orbTotal = orbCount();
  const orbContainer = [];

  for(let i = 1; i < orbTotal + 1; i++) {
    orbContainer.push(<Orb key={i} />);
  }

  const [reset, setReset] = useState(true);
  const timer = 7000;

  useEffect(() => {
    setOrbs(orbContainer);
    setTimeout(() => {
      setReset(!reset);
    }, timer);
  }, [reset]);

  return (
    <main
      className={styles.App}
      data-testid='app'
    >
      <Welcome />
      {reset && orbs}
      {!reset && orbs}
    </main>
  );
};

export default App;
