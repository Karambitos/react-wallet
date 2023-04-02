import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonth, selectYear } from 'redux/statisticsFilter/selectors';
import { updateMonth, updateYear } from 'redux/statisticsFilter/slice';
import { getSummaryController } from 'redux/transactions/operations';
import Selector from '../../Selector/Selector';

// import styles from './Filter.module.scss';

export default function Filter() {
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSummaryController({ month, year }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleYearChange = event => {
    dispatch(updateYear(event.target.value));
    dispatch(getSummaryController({ month: month, year: event.target.value }));
  };

  // OLD
  // const handleMonthChange = event => {
  //   dispatch(updateMonth(event.target.value));
  //   dispatch(getSummaryController({ month: event.target.value, year: year }));
  // };

  // NEW
  const handleMonthChange = event => {
    console.log(event);
    dispatch(updateMonth(event));
    dispatch(getSummaryController({ month: event, year: year }));
  };

  // const handleMonthChange = useCallback(
  //   option => {
  //     setCategoryId(option);
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [categories]
  // );

  const handleSubmit = event => {
    event.preventDefault();
  };

  const months = [
    { name: 'January' },
    { name: 'February' },
    { name: 'March' },
    { name: 'April' },
    { name: 'May' },
    { name: 'June' },
    { name: 'July' },
    { name: 'August' },
    { name: 'September' },
    { name: 'October' },
    { name: 'November' },
    { name: 'December' },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <Selector
        // defaultInputValue={month}
        // value={{ value: month, label: month }}
        options={months}
        onSelect={handleMonthChange}
      />
      <select id="year" name="year" value={year} onChange={handleYearChange}>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
        <option value={2020}>2020</option>
        <option value={2019}>2019</option>
      </select>
      <select
        id="month"
        name="month"
        value={month}
        onChange={handleMonthChange}
      >
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>September</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
      </select>
    </form>
  );
}
