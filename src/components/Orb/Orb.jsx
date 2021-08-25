import React from 'react';
import { generateOrbStyle } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  const orbStyle = generateOrbStyle();
  console.log(orbStyle);

  return (
    <div
      className={styles.Orb}
      data-testid="orb-element"
      style={orbStyle}
    ></div>
  );
};

export default Orb;
