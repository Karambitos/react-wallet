import { IconButton } from 'components/IconButton/IconButton';
import HomeTab from 'components/HomeTab/HomeTab';
import {TransactionsList} from 'components/TransactionsList/'

const Home = () => {
  return (
    <>
      <TransactionsList/>

      <HomeTab />
    </>
  );
};

export default Home;
