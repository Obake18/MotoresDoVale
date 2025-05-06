import TextList from "./componentes/textos";
import Contato from "./componentes/contato";
import styles from "./home.module.css";
export default function Home() {
  return (
    <>
      <div className="titulo">
      <div className={styles.topo}>
        <h1 className={styles.titulo}>Motores do Vale</h1>
        <Contato />
      </div>

      </div>

      <div>
        
        <TextList />
      </div>
    </>
  );
}
