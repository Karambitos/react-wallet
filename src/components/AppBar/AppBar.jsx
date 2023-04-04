import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Logout } from '../../assets/svg/logout.svg';
import { ReactComponent as Divider } from '../../assets/svg/divider.svg';

import styles from './AppBar.module.scss';
import { LogoutBtn } from 'components/logoutBtn/logoutBtn';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const userName = useSelector(state => state.auth.user.username);
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>

        <div className={styles.user}>
          <span className={styles.username}>{userName}</span>
          <Divider className={styles.divider} />

          <LogoutBtn>
            <Link to="#" className={styles.logoutWrapper}>
              <Logout className={styles.logout} />
              <span className={styles.exit}>Exit</span>
            </Link>
          </LogoutBtn>
        </div>
      </header>
    </div>
  );
};

export default AppBar;
