import styles from "./Header.module.scss";
import Socials from "../Socials/Socials.tsx";
const Header = () => {
  return (
    <header className={styles.header}>
      <Socials />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.itemList}>
            <a href={"#about"}>About Me</a>
          </li>
          <li className={styles.itemList}>
            <a href={"#skills"}>About Me</a>
          </li>
          <li className={styles.itemList}>
            <a href={"#projects"}>Projects</a>
          </li>
          <li className={styles.itemList}>
            <a href={"#contacts"}>Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
