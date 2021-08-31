import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section className={styles.Welcome}>
      <header>Glowing Colors</header>
      <p>Click on the orbs to change their size and colors.</p>
    </section>
  );
};

export default Welcome;
