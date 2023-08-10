import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.links}></div>
            <nav className={styles.nav}></nav>
        </header>
    );
}

export default Header;