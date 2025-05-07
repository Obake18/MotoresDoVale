'use client';

import Image from 'next/image';
import styles from './logo.module.css';

export default function Log() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/imagens/logo/logo.png"
        alt="Logo Motores do Vale"
        width={150}
        height={150}
        className={styles.logo}
        priority
      />
    </div>
  );
}
