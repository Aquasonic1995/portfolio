import Socials from "../Socials/Socials.tsx";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <h2>Contact Me</h2>
      <Socials />
    </footer>
  );
};

export default Footer;
