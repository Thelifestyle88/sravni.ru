import { Link } from 'react-router-dom';
import styles from './styles/appHeader.module.scss';

function AppHeader() {
  return (
    <header className={styles.headerWrapper}>
      <Link to="/">
        <button className={styles.button}>На главную</button>
      </Link>
    </header>
  );
}

export default AppHeader;
