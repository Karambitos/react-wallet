import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  fetchAllTransactions,
  fetchDeleteTransactions,
} from 'redux/transactions/operations';
import { getCurrentUser } from 'redux/auth/authThunks';
import {
  selectAllTransactions,
  selectIsLoading,
} from 'redux/transactions/selectors';
import { ReactComponent as EditIcon } from 'images/edit-pensil.svg';
import { IconButton } from 'components/IconButton/IconButton';
import css from './TransactionsList.module.scss';
import Loader from 'components/Loader/Loader';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAllTransactions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const transactions = useSelector(selectAllTransactions);

  const getTransactionType = type => {
    return type === 'EXPENSE' ? '-' : '+';
  };

  // const getTransactionColor = type => {
  //   return type === 'EXPENSE' ? '#FF6596' : '#24CCA7';
  // };

  const getTransactionColor = type => {
    const className = type === 'EXPENSE' ? css.expense : css.income;
    const color = type === 'EXPENSE' ? '#FF6596' : '#24CCA7';
    return { className, color };
  };

  const getCategory = categoryId => {
    switch (categoryId) {
      case 'c9d9e447-1b83-4238-8712-edc77b18b739':
        return 'Main Expenses';
      case '27eb4b75-9a42-4991-a802-4aefe21ac3ce':
        return 'Products';
      case 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4':
        return 'Self care';
      case '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386':
        return 'Car';
      case '76cc875a-3b43-4eae-8fdb-f76633821a34':
        return 'Child care';
      case '128673b5-2f9a-46ae-a428-ec48cf1effa1':
        return 'Household products';
      case '1272fcc4-d59f-462d-ad33-a85a075e5581':
        return 'Education';
      case 'c143130f-7d1e-4011-90a4-54766d4e308e':
        return 'Leisure';
      case '719626f1-9d23-4e99-84f5-289024e437a8':
        return 'Other expenses';
      case '3acd0ecd-5295-4d54-8e7c-d3908f4d0402':
        return 'Entertainment';
      case '063f1132-ba5d-42b4-951d-44011ca46262':
        return 'Income';
      default:
        return;
    }
  };

  const sumRef = value => {
    const formattedNum = Math.abs(value).toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    const formattedString = formatter.format(formattedNum);
    const replacedString = formattedString.replaceAll(',', ' ');
    const decimalPart = formattedNum.split('.')[1] || '00';
    return `${replacedString}.${decimalPart}`;
  };

  const handleDelete = id => {
    dispatch(fetchDeleteTransactions(id))
      .unwrap()
      .then(dispatch(getCurrentUser()))
      .catch(error => console.log(error));
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 767.98px)',
  });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      {isLoading && <Loader />}
      {isTabletOrDesktop && (
        <div
          className={`${css.transactionsTableWrapper} ${
            isLoading && css.isLoading
          }`}
        >
          <table className="transactionsTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th className="cell textAlignL">Sum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>
                    {new Date(transaction.transactionDate).toLocaleDateString(
                      'ru-RU',
                      { year: '2-digit', month: '2-digit', day: '2-digit' }
                    )}
                  </td>
                  <td>{getTransactionType(transaction.type)}</td>
                  <td>{getCategory(transaction.categoryId)}</td>
                  <td>{transaction.comment}</td>
                  <td
                    style={{
                      color: getTransactionColor(transaction.type).color,
                      fontWeight: '700',
                    }}
                  >
                    {sumRef(transaction.amount)}
                  </td>
                  <td className="cell actions">
                    <IconButton type="button" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <button
                      disabled={isLoading}
                      onClick={() => handleDelete(transaction.id)}
                      className={`${css.tableButton} button button button--small`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isMobile && (
        <ul className={css.mobileTransactionsList}>
          {transactions.map(transaction => (
            <li className={css.mobileTransactionsItem} key={transaction.id}>
              <ul
                className={`${css.mobileTransaction}  ${
                  getTransactionColor(transaction.type).className
                }`}
              >
                <li>
                  <span className={css.mobileTransList__title}>Date</span>{' '}
                  <span>
                    {new Date(transaction.transactionDate).toLocaleDateString(
                      'ru-RU',
                      { year: '2-digit', month: '2-digit', day: '2-digit' }
                    )}
                  </span>
                </li>
                <li>
                  <span className={css.mobileTransList__title}>Type</span>{' '}
                  <span>{getTransactionType(transaction.type)}</span>
                </li>
                <li>
                  <span className={css.mobileTransList__title}>Category</span>{' '}
                  <span>{getCategory(transaction.categoryId)}</span>
                </li>
                <li>
                  <span className={css.mobileTransList__title}>Comment</span>{' '}
                  <span>{transaction.comment}</span>
                </li>
                <li>
                  <span className={css.mobileTransList__title}>Sum</span>{' '}
                  <span
                    style={{
                      color: getTransactionColor(transaction.type).color,
                      fontWeight: '700',
                    }}
                  >
                    {sumRef(transaction.amount)}
                  </span>
                </li>
                <li>
                  <button
                    type="button"
                    className={`${css.tableButton} button button button--small`}
                    onClick={() => handleDelete(transaction.id)}
                  >
                    Delete
                  </button>
                  <div>
                    <IconButton type="button" aria-label="edit">
                      <EditIcon />
                      <span className={css.editButtonTitle}>Edit</span>
                    </IconButton>
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionsList;
