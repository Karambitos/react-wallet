import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getSummaryController } from 'redux/auth/operations';
import styles from './Chart.module.scss';
import Filter from './Filter/Filter';
import StatisticsList from './StatisticsList/StatisticsList';

ChartJS.register(ArcElement, Tooltip);

export default function Chart() {
  const { categoriesSummary } = useSelector(state => state.auth.transactions);
  const dispatch = useDispatch();
  const balans = '₴24 000.00';

  const getValues = (array, value) => {
    return array.filter(item => item.type !== 'INCOME').map(obj => obj[value]);
    // return array.map(obj => obj[value]);
  };

  const backgroundColor = [
    'rgba(254, 208, 87, 1)',
    'rgba(255, 216, 208, 1)',
    'rgba(253, 148, 152, 1)',
    'rgba(197, 186, 255, 1)',
    'rgba(110, 120, 232, 1)',
    'rgba(74, 86, 226, 1)',
    'rgba(129, 225, 255, 1)',
    'rgba(36, 204, 167, 1)',
    'rgb(25, 255, 0, 1)',
    'rgba(221, 55, 194, 0.8)',
    'rgba(66, 5, 142, 0.8)',
    'rgba(15, 102, 255, 0.2)',
  ];

  const dataChart = {
    labels: getValues(categoriesSummary, 'name'),
    datasets: [
      {
        data: getValues(categoriesSummary, 'total'),
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  };

  const optionsChart = {
    cutout: 105,
  };

  useEffect(() => {
    dispatch(getSummaryController(3, 2023));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chart}>
        <Doughnut
          data={dataChart}
          options={optionsChart}
          plugins={[
            {
              beforeDraw(chart) {
                const { width } = chart;
                const { height } = chart;
                const { ctx } = chart;
                ctx.restore();
                ctx.font = 'bold 18px Circe';
                ctx.textBaseline = 'middle';
                const text = balans;
                const textX = (width - ctx.measureText(text).width) / 2;
                const textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
              },
            },
          ]}
        />
      </div>
      <div className={styles.main}>
        <Filter />
        <StatisticsList backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}
