import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ onBeginClick, fadeOut }) => {
  return (
    <section className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <h1>Glowing Colors</h1>
      {/* eslint-disable-next-line max-len */}
      <p>Welcome to a world of softly changing colors. Colorful orbs will appear and fade away with their sizes, colors, and numbers changing each time. Click on the orbs to move them while also changing their colors and sizes. To return to this page, click in the upper righthand corner of the screen.</p>
      <button onClick={onBeginClick}>Begin</button>
    </section>
  );
};

Welcome.propTypes = {
  onBeginClick: PropTypes.func.isRequired,
  fadeOut: PropTypes.bool.isRequired
};

export default Welcome;
