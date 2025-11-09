// components/Button.js
"use client";

import styles from './Button.module.css';

export default function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
