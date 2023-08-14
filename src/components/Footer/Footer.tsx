import Socials from "../Socials/Socials.tsx";
import styles from "./Footer.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <h2>Contact Me</h2>
      <Socials />

      <div
        className={styles.up}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <AiOutlineArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
