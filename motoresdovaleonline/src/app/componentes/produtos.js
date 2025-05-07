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
