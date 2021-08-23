import React from 'react';
import { colorPicker } from '../../utils/utils';
// import PropTypes from 'prop-types';
import styles from './Orb.module.css';

const Orb = () => {

  const bkdgColor = colorPicker(.75);
  const borderStyle = `medium solid ${colorPicker(.5)}`;
  const boxShadowStyle = `0 0 2vw 2vw ${colorPicker(1)}`;

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

Orb.propTypes = {

};

export default Orb;
