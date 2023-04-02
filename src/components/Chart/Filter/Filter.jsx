import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSummaryController } from 'redux/transactions/operations';
import styles from './Filter.module.scss';

export default function Filter() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const dispatch = useDispatch();

  const handleYearChange = event => {
    setYear(event.target.value);
    dispatch(getSummaryController({ month: month, year: event.target.value }));
  };

  const handleMonthChange = event => {
    setMonth(event.target.value);
    dispatch(getSummaryController({ month: event.target.value, year: year }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth() + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
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
