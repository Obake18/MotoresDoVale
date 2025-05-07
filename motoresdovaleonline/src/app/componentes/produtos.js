'use client';

import React from 'react';
import Image from 'next/image';
import styles from './produtos.module.css';

const listaEsquerda = [
  { id: 1, nome: 'Motosserras', imagem: '/imagens/produtos/motosserra.png' },
  { id: 2, nome: 'Roçadeiras', imagem: '/imagens/produtos/rocadeira.png' },
  { id: 3, nome: 'Pulverizadores', imagem: '/imagens/produtos/pulv.png' },
];

const listaDireita = [
  { id: 4, nome: 'Motores elétricos', imagem: '/imagens/produtos/motor-ele.png' },
  { id: 5, nome: 'Geradores', imagem: '/imagens/produtos/gerador.png' },
  { id: 6, nome: 'Forrageira', imagem: '/imagens/produtos/forrageira.png' },

];

function ListaAnimada({ itens }) {
  const itensDuplicados = [...itens, ...itens];
  return (
    <div className={styles.listaContainer}>
      <div className={styles.listaAnimada}>
        {itensDuplicados.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.imagem}
              alt={item.nome}
              width={200}
              height={150}
              className={styles.imagem}
            />
            <p>{item.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Produtos() {
  return (
    <div className={styles.container}>
      <ListaAnimada itens={listaEsquerda} />

      <div className={styles.infoContainer}>
        <h2 className={styles.infoTitulo}>Sobre a Motores do Vale</h2>
        <p className={styles.infoTexto}>
          Especializados em manutenção e reparo de equipamentos agrícolas, como motosserras,
          roçadeiras, pulverizadores, motores elétricos e motores em geral. Atendemos toda a região
          com compromisso, qualidade e agilidade.
        </p>
        <div className={styles.mapaContainer}>
          <iframe
            title="Localização da Motores do Vale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.691386210178!2d-40.489405924976005!3d-9.44843739063061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77371eee37b7953%3A0x551ee236d8c3d7bb!2sMotores%20do%20Vale!5e0!3m2!1spt-BR!2sbr!4v1746627381367!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>

      <ListaAnimada itens={listaDireita} />
    </div>
  );
}
