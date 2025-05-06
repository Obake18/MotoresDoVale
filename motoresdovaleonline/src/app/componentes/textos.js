import textos from './textos.json';

export default function TextList() {
  return (
    <>
      {textos.mensagens.map((mensagem, index) => (
        <div key={index}>
            <div>
                <div>{mensagem}</div>
            </div>

        </div>
      ))}
    </>
  );
}


