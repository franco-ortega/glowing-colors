import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ onBeginClick, fadeOut }) => {
  return (
    <section className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <h1>Glowing Colors</h1>
      {/* eslint-disable-next-line max-len */}
      <p>Welcome to this world of softly changing colors. When you click the Begin button, colorful orbs will appear and fade away with new sizes and colors each time. Also, you can click on the orbs to move them while their sizes and colors change.</p>
      <button onClick={onBeginClick}>Begin</button>
    </section>
  );
};

Welcome.propTypes = {
  onBeginClick: PropTypes.func.isRequired,
  fadeOut: PropTypes.bool.isRequired
};

export default Welcome;
