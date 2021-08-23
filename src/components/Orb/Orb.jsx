import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Orb.module.css';

const Orb = () => {

  const colorCode = () => {
    return Math.floor(Math.random() * 256);
  };

  const colorPicker = () => {
    const red = colorCode();
    const green = colorCode();
    const blue = colorCode();

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const bkdgColor = colorPicker();
  const borderStyle = `thick solid ${colorPicker()}`;
  const boxShadowStyle = `0 0 2vw 2vw ${colorPicker()}`;

  console.log(bkdgColor);
  console.log(borderStyle);

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
