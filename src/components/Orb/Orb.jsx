import React from 'react';
import { colorPicker, selectPosition, shadowBlur, shadowSpread } from '../../utils/utils';
import styles from './Orb.module.css';

const Orb = () => {
  const bkdgColor = colorPicker(.75);

  const borderStyle = `medium solid ${colorPicker(.5)}`;
  
  const blurRadius = shadowBlur();
  const spreadRadius = shadowSpread();
  const boxShadowStyle = `0 0 ${blurRadius} ${spreadRadius} ${colorPicker(1)}`;

  const positionTop = selectPosition();
  const positionRight = selectPosition();

  return (
    <div
      className={styles.Orb}
      data-testid="orb-element"
      style={{
        backgroundColor: bkdgColor,
        border: borderStyle,
        boxShadow: boxShadowStyle,
        top: positionTop,
        right: positionRight
      }}
    ></div>
  );
};

export default Orb;
