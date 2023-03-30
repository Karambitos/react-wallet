import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTransactions } from 'redux/transactions/operations';

export const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  return <div>HomeTab</div>;
};
