import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getSummaryController } from 'redux/auth/operations';
import { v4 as uuidv4 } from 'uuid';
import styles from './Chart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const { categoriesSummary, expenseSummary, incomeSummary } = useSelector(
    state => state.auth.transactions
  );
  const dispatch = useDispatch();

  const getValues = (array, value) => {
    return array.map(obj => obj[value]);
  };

  const data = {
    // labels: getValues(categoriesSummary, 'name'),
    datasets: [
      {
        label: '# of Votes',
        data: getValues(categoriesSummary, 'total'),
        backgroundColor: [
          'rgba(51, 236, 167, 0.8)',
          'rgba(84, 184, 249, 0.8)',
          'rgba(14, 242, 231, 0.8)',
          'rgba(221, 55, 194, 0.8)',
          'rgba(1, 114, 201, 0.8)',
          'rgba(66, 5, 142, 0.8)',
          'rgba(223, 158, 197, 0.8)',
          'rgba(15, 116, 232, 0.8)',
          'rgba(28, 189, 100, 0.8)',
          'rgba(207, 114, 104, 0.8)',
          'rgba(15, 102, 255, 0.2)',
          'rgba(25, 118, 16, 0.8)',
          'rgba(214, 249, 210, 0.8)',
        ],
      },
    ],
  };

  useEffect(() => {
    dispatch(getSummaryController());
  }, []);

  return (
    <>
      <div className={styles.canvas}>
        <Doughnut
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      </div>

      <div>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul>
        {categoriesSummary.map(({ name, total, type }) => {
          if (type !== 'INCOME') {
            return (
              <li key={uuidv4()}>
                <span>{name}</span>
                <span>{-total}</span>
              </li>
            );
          }
        })}
      </ul>
      <div>
        <span>Expenses:</span>
        <span> {expenseSummary}</span>
      </div>
      <div>
        <span>Income:</span>
        <span>{incomeSummary}</span>
      </div>
    </>
  );
}
