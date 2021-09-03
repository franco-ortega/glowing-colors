import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ onBeginClick, fadeOut }) => {
  return (
    <section className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <h1>Glowing Colors</h1>
      {/* eslint-disable-next-line max-len */}
      <p>Welcome to this world of softly changing colors. When you click the Begin button, colorful orbs will repeatedly appear and fade away. The sizes, colors, and amounts of orbs will change each time. Additionally, you can click on the orbs to move them, which will also change their sizes and colors.</p>
      <button onClick={onBeginClick}>Begin</button>
    </section>
  );
};

Welcome.propTypes = {
  onBeginClick: PropTypes.func.isRequired,
  fadeOut: PropTypes.bool.isRequired
};

export default Welcome;
