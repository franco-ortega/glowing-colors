import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = ({ onBeginClick, fadeOut }) => {
  return (
    <section className={`${styles.Welcome} ${fadeOut && styles.FadeOut}`}>
      <h1>Glowing Colors</h1>
      {/* eslint-disable-next-line max-len */}
      <p>Welcome to a world of softly changing colors. When you click Begin, colorful orbs will appear and fade away repeatedly. The sizes, colors, and amounts of orbs will change each time. Additionally, you can click on the orbs to move them, which will also change their colors and sizes. To return to this page, click in the upper righthand corner of the screen.</p>
      <button onClick={onBeginClick}>Begin</button>
    </section>
  );
};

Welcome.propTypes = {
  onBeginClick: PropTypes.func.isRequired,
  fadeOut: PropTypes.bool.isRequired
};

export default Welcome;
