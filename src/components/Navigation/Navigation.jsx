import { NavLink } from 'react-router-dom';

import { ReactComponent as HomePageIcon } from '../../assets/svg/nav-house.svg';
import { ReactComponent as StatisticsPageIcon } from '../../assets/svg/nav-chart.svg';
import { ReactComponent as CurrencyIcon } from '../../assets/svg/nav-dollar.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        <HomePageIcon className={styles.navIcon} />
        <span className={styles.navText}>Home</span>
      </NavLink>
      <NavLink to="/statistics" className={styles.navLink}>
        <StatisticsPageIcon className={styles.navIcon} />
        <span className={styles.navText}>Statistics</span>
      </NavLink>
      <NavLink to="/currency" className={styles.navLinkCurrency}>
        <CurrencyIcon className={styles.navIcon} />
      </NavLink>
    </nav>
  );
};

export default Navigation;
