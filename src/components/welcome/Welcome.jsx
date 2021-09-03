import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ onBeginClick }) => {
  return (
    <section className={styles.Welcome}>
      <h1>Glowing Colors</h1>
      <p>Click on the orbs to change their size and colors.</p>
      <button onClick={onBeginClick}>Continue</button>
    </section>
  );
};

Welcome.propTypes = {
  onBeginClick: PropTypes.func.isRequired
};

export default Welcome;
