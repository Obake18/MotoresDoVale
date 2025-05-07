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
  { id: 4, nome: 'Motores elétricos', imagem: '/imagens/trator1.jpg' },
  { id: 5, nome: 'Trator Agrícola 2', imagem: '/imagens/trator2.jpg' },
  { id: 6, nome: 'Trator Agrícola 3', imagem: '/imagens/trator3.jpg' },
];

function ListaAnimada({ itens }) {
  // Repete os itens para looping contínuo
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
      <ListaAnimada itens={listaDireita} />
    </div>
  );
}
