import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Contato() {
  const numeroWhatsApp = "5574981166016";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;
  const linkInstagram = "https://www.instagram.com/motoresdovaleof/"; // Substitua pelo seu @

  return (
    <div className="contato">
      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="botao-whatsapp">
        <FaWhatsapp className="icone-contato" />
        <span>Fale conosco pelo WhatsApp</span>
      </a>

      <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="botao-instagram">
        <FaInstagram className="icone-contato" />
        <span>Chame a empresa no Instagram</span>
      </a>
    </div>
  );
}
