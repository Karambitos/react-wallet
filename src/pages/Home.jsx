import { IconButton } from 'components/IconButton/IconButton';
import HomeTab from 'components/HomeTab/HomeTab';
import {TransactionsList} from 'components/TransactionsList/'
// import { ReactComponent as EditIcon } from 'images/edit-pensil.svg';

const Home = () => {
  return (
    <>
      <TransactionsList/>

      <HomeTab />
    </>
  );
};

export default Home;
