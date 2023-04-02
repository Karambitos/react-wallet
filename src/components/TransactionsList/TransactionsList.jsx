// import React from 'react';

// export const TransactionsList = () => {
//   return <div>TransactionsList</div>;
// };


import { useMediaQuery } from 'react-responsive';
import css from './TransactionsList.module.scss';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as EditIcon } from 'images/edit-pensil.svg';

export const TransactionsList = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767.98px)',
  });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      {isTabletOrDesktop && (
        <table className={css.transactionsTable}>
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
            <tr>
              <td className="cell">04-01-19</td>
              <td className="cell">+</td>
              <td className="cell">Groceries</td>
              <td className="cell">Bought food for week</td>
              <td className="cell">5 000.00</td>
              <td className="cell actions">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <button
                  href="#"
                  className={`${css.tableButton} button button button--small`}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="cell">04-01-19</td>
              <td className="cell">+</td>
              <td className="cell">Groceries</td>
              <td className="cell">Bought food for week</td>
              <td className="cell">5 000.00</td>
              <td className="cell actions">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <button
                  href="#"
                  className={`${css.tableButton} button button button--small`}
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="cell">04-01-19</td>
              <td className="cell">+</td>
              <td className="cell">Groceries</td>
              <td className="cell">Bought food for week</td>
              <td className="cell">5 000.00</td>
              <td className="cell actions">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <button
                  href="#"
                  className={`${css.tableButton} button button button--small`}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
                  <IconButton>
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