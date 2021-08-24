import React from 'react';
import { colorPicker, shadowBlur, shadowSpread } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  const bkdgColor = colorPicker(.75);

  const borderStyle = `medium solid ${colorPicker(.5)}`;
  
  const blurRadius = shadowBlur();
  const spreadRadius = shadowSpread();
  const boxShadowStyle = `0 0 ${blurRadius} ${spreadRadius} ${colorPicker(1)}`;

  return (
    <div
      className={styles.Orb}
      data-testid="orb-element"
      style={{
        backgroundColor: bkdgColor,
        border: borderStyle,
        boxShadow: boxShadowStyle
      }}
    ></div>
  );
};

export default Orb;
