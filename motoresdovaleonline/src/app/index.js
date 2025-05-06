import TextList from "./componentes/textos";
import Contato from "./componentes/contato";

export default function Home() {
  return (
    <>
      <div className="titulo">
        <h1>Motores do Vale</h1>
      </div>

      <div>
        <Contato />
      </div>

      <div>
        <TextList />
      </div>
    </>
  );
}
