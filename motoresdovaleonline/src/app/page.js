import TextList from "./componentes/textos";
import Contato from "./componentes/contato";
import styles from "./home.module.css";
import Produtos from "./componentes/produtos";
import Image from "next/image";
import Logo from "./componentes/logo";
import Info from "./componentes/info";
export default function Home() {
  return (
    <>
      <div className="titulo">
        <div className={styles.topo}>
          <div className={styles.logoTitulo}>
            <Logo />
            <h1 className={styles.titulo}>Motores do Vale</h1>
          </div>
          <Contato />
        </div>


      </div>
      <Produtos />
      <div>

        <TextList />
      </div>
      <Info />
    </>
  );
}
