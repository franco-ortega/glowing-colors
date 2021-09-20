import React, {
  useEffect, 
  useState 
} from 'react';
import { orbCount } from '../../utils/utils';
import Welcome from '../welcome/Welcome';
import Orb from '../Orb/Orb';
import './Global.css';
import styles from './App.module.css';

export const App = () => {
  const [begin, setBegin] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [orbs, setOrbs] = useState([]);
  const [reset, setReset] = useState(true);
  const orbContainer = [];
  const orbTotal = orbCount();
  const timer = 7000;

  const onBeginClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setBegin(true);
    }, 2000);
  };

  for(let i = 1; i < orbTotal + 1; i++) {
    orbContainer.push(<Orb key={i} />);
  }

  useEffect(() => {
    setOrbs(orbContainer);
    if(begin) {
      setTimeout(() => {
        setReset(!reset);
      }, timer);
    }
  }, [begin, reset]);

  const onGoBackClick = () => {
    console.log('Go Back clicked');
    setBegin(false);
    setFadeOut(false);
  };

  return (
    <main
      className={styles.App}
      data-testid="app"
    >
      {begin && <button onClick={onGoBackClick}>Go Back</button>}
      {!begin && <Welcome onBeginClick={onBeginClick} fadeOut={fadeOut} />}
      {begin && reset && orbs}
      {begin && !reset && orbs}
    </main>
  );
};

export default App;
