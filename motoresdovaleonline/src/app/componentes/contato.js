import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  const numeroWhatsApp = "557481166046"; // Coloque aqui o número com DDI (55 para Brasil) e DDD

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;

  return (
    <div className="contato">
      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="botao-whatsapp">
        <FaWhatsapp className="icone-contato" />
        <span>Fale conosco pelo WhatsApp</span>
      </a>
    </div>
  );
}
