import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './StatisticsList.module.scss';

export default function StatisticsList({ backgroundColor }) {
  const { categories, expenseSummary, incomeSummary } = useSelector(
    state => state.transactions.categoriesSummary
  );

  const sumRef = value => {
    const totalToPositive = -value;
    const formattedNum = (
      Math.round((totalToPositive / 100) * 100) / 100
    ).toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    const formattedString = formatter.format(formattedNum);
    const replacedString = formattedString.replace(',', ' ');
    return replacedString;
  };
  return (
    <>
      <div className={styles.label}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul className={styles.list}>
        {categories
          .filter(item => item.type !== 'INCOME')
          .map(({ name, total, type }, index) => {
            return (
              <li key={uuidv4()}>
                <span>
                  <span
                    className={styles.marker}
                    style={{ backgroundColor: backgroundColor[index] }}
                  ></span>
                  {name}
                </span>
                <span>{sumRef(total)}</span>
              </li>
            );
          })}
      </ul>
      <div className={styles.total}>
        <span>Expenses:</span>
        <span className={styles.red}> {sumRef(expenseSummary)}</span>
      </div>
      <div className={styles.total}>
        <span>Income:</span>
        <span className={styles.green}>{sumRef(-incomeSummary)}</span>
      </div>
    </>
  );
}
