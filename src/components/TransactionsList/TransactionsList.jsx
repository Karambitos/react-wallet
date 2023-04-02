import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  fetchAllTransactions,
  fetchDeleteTransactions,
} from 'redux/transactions/operations';
import { selectAllTransactions } from 'redux/transactions/selectors';
import { ReactComponent as EditIcon } from 'images/edit-pensil.svg';
import { IconButton } from 'components/IconButton/IconButton';
import css from './TransactionsList.module.scss';

const TransactionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTransactions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const transactions = useSelector(selectAllTransactions);

  const getTransactionType = type => {
    return type === 'EXPENSE' ? '-' : '+';
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

  const isMobile = useMediaQuery({
    query: '(max-width: 767.98px)',
  });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      {isTabletOrDesktop && (
        <div style={{ overflow: 'auto', height: '400px' }}>
          <table className="transactionsTable">
            <thead>
              <tr>
                <th className="cell">Date</th>
                <th className="cell">Type</th>
                <th className="cell">Category</th>
                <th className="cell">Comment</th>
                <th className="cell textAlignL">Sum</th>
                <th className="cell"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="cell">{transaction.transactionDate}</td>
                  <td className="cell">
                    {getTransactionType(transaction.type)}
                  </td>
                  <td className="cell">
                    {getCategory(transaction.categoryId)}
                  </td>
                  <td className="cell">{transaction.comment}</td>
                  <td className="cell">{transaction.amount}</td>
                  <td className="cell actions">
                    <IconButton type="button" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <button
                      href="#"
                      className="button button--small tableButton"
                      onClick={() =>
                        dispatch(fetchDeleteTransactions(transaction.id))
                      }
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
        <ul className={css.mobileTransList}>
          <li>
            <ul className={css.mobileTransList__item}>
              <li>
                <span className={css.mobileTransList__title}>Date</span>{' '}
                <span>04.01.19</span>
              </li>
              <li>
                <span className={css.mobileTransList__title}>Type</span>{' '}
                <span>-</span>
              </li>
              <li>
                <span className={css.mobileTransList__title}>Category</span>{' '}
                <span>Other</span>
              </li>
              <li>
                <span className={css.mobileTransList__title}>Comment</span>{' '}
                <span>Gift for your wife</span>
              </li>
              <li>
                <span className={css.mobileTransList__title}>Sum</span>{' '}
                <span>300.00</span>
              </li>
              <li>
                <button
                  type="button"
                  className={`${css.tableButton} button button button--small`}
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
        </ul>
      )}
    </>
  );
};

export default TransactionsList;
