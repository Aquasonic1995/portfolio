import styles from "./Header.module.scss";
import Socials from "../Socials/Socials.tsx";
const Header = () => {
  return (
    <header className={styles.header} id="header">
      <Socials />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.item}>
            <a href={"#about"}>About Me</a>
          </li>
          <li className={styles.item}>
            <a href={"#skills"}>Skills</a>
          </li>
          <li className={styles.item}>
            <a href={"#projects"}>Projects</a>
          </li>
          <li className={styles.item}>
            <a href={"#contacts"}>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
