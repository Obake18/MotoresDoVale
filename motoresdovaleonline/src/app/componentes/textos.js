'use client';

import textos from './textos.json';
import Image from 'next/image';
import styles from './textlist.module.css'; // Crie esse CSS

export default function TextList() {
  return (
    <div className={styles.container}>
      {textos.mensagens.map((item, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={item.imagem}
            alt={`Imagem - ${item.texto}`}
            width={300}
            height={200}
            className={styles.imagem}
          />
          <p className={styles.texto}>{item.texto}</p>
        </div>
      ))}
    </div>
  );
}



