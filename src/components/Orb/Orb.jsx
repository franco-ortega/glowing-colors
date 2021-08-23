import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Orb.module.css';

const Orb = () => {
  return (
    <div
      className={styles.Orb}
      data-testid="orb-element"
    ></div>
  );
};

Orb.propTypes = {

};

export default Orb;
