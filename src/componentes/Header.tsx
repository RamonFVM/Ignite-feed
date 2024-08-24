
import styles from './Header.module.css';
import igniteLogo from './ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>



            <strong>ignite feed</strong>
            <img src={igniteLogo} />
        </header>
    );
}