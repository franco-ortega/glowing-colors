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
  const [begin, setBegin] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [orbs, setOrbs] = useState([]);
  const orbTotal = orbCount();
  const orbContainer = [];

  const onBeginClick = () => {
    console.log('Continue button clicked');
    setFadeOut(true);

    setTimeout(() => {
      setBegin(true);
    }, 4000);
  };

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
      data-testid="app"
    >
      {!begin && <Welcome onBeginClick={onBeginClick} fadeOut={fadeOut} />}
      {reset && orbs}
      {!reset && orbs}
    </main>
  );
};

export default App;
