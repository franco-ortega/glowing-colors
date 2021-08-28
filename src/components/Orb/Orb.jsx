import React, { useState } from 'react';
import { generateOrbStyle } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  // enableMove adds the Move class to Orb
  const [enableMove, setEnableMove] = useState(false);
  // move causes the Orb to re-render, which triggers the creation of a new set of styles
  const [move, setMove] = useState(false);

  const orbStyle = generateOrbStyle();

  const onOrbClick = () => {
    setEnableMove(true);
    setMove(!move);
  };

  return (
    <button
      className={`${styles.Orb} ${enableMove && styles.Move}`}
      data-testid="orb-element"
      style={orbStyle}
      onClick={onOrbClick}
    ></button>
  );
};

export default Orb;
