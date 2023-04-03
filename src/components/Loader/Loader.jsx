import { Grid } from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => (
  <Grid
    height="80"
    width="80"
    color="#24cca7"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{}}
    wrapperClass={styles.loader}
    visible={true}
  />
);
export default Loader;
