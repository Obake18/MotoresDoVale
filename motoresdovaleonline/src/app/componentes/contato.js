import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "./contato.module.css";

export default function Contato() {
  const numeroWhatsApp = "5574981166016";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}`;
  const linkInstagram = "https://www.instagram.com/motoresdovaleof/";

  return (
    <div className={styles.contato}>
      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className={styles["botao-whatsapp"]}>
        <FaWhatsapp className={styles["icone-contato"]} />
        <span>Fale conosco pelo WhatsApp</span>
      </a>

      <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className={styles["botao-instagram"]}>
        <FaInstagram className={styles["icone-contato"]} />
        <span>Siga nosso Instagram</span>
      </a>
    </div>
  );
}
