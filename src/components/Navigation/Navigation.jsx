import { NavLink } from 'react-router-dom';

import { ReactComponent as HomePageIcon } from '../../images/nav-house.svg';
import { ReactComponent as StatisticsPageIcon } from '../../images/nav-chart.svg';
import { ReactComponent as CurrencyIcon } from '../../images/nav-dollar.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav  className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>
        <HomePageIcon className={styles.navIcon}/>
        <span className={styles.navText}>Home</span>
      </NavLink>
      <NavLink to="/statistics" className={styles.navLink}>
        <StatisticsPageIcon className={styles.navIcon}/>
        <span className={styles.navText}>Statistics</span>
      </NavLink>
      <NavLink to="/" className={styles.navLinkCurrency}>
        <CurrencyIcon  className={styles.navIcon }/>
      </NavLink>
    </nav>
  );
};

export default Navigation;
