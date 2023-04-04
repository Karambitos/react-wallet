import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import { fetchAllTransactions } from 'redux/transactions/operations';
import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import styles from '../HomeTab/HomeTab.module.scss';

const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(setModalAddTransactionOpen(true));
  };

  return (
    <>
      <TransactionsList />
      <div className={styles.containerBtn}>
        <button
          type="button"
          className={styles.btnPlus}
          onClick={handleOpenModal}
        >
          <Plus />
        </button>
      </div>
    </>
  );
};

export default HomeTab;
