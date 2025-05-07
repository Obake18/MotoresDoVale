'use client';

import Image from 'next/image';
import styles from './logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
<Image
        src="/imagens/logo/logo.png"
        alt="Logo Motores do Vale"
        width={64}
        height={64}
        className={styles.logo}
        priority
      />
    </div>
  );
}
