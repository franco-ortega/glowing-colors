import React, { useState } from 'react';
import { generateOrbStyle } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  const [move, setMove] = useState(false);

  const orbStyle = generateOrbStyle();

  const onOrbClick = () => {
    console.log('Orb clicked: ' + move);
    setMove(!move);
  };

  console.log(move);

  return (
    <button
      className={`${styles.Orb}`}
      data-testid="orb-element"
      style={orbStyle}
      onClick={onOrbClick}
    ></button>
  );
};

export default Orb;
