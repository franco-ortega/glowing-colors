import React from 'react';
import { generateOrbStyle } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  const orbStyle = generateOrbStyle();

  const onOrbClick = () => {
    console.log('Orb clicked.');
  };

  return (
    <button
      className={styles.Orb}
      data-testid="orb-element"
      style={orbStyle}
      onClick={onOrbClick}
    ></button>
  );
};

export default Orb;
