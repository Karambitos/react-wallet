import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonth, selectYear } from 'redux/statisticsFilter/selectors';
import { updateMonth, updateYear } from 'redux/statisticsFilter/slice';
import { getSummaryController } from 'redux/transactions/operations';
import Selector from '../../Selector/Selector';

import styles from './Filter.module.scss';

export default function Filter() {
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSummaryController({ month, year }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMonthChange = event => {
    dispatch(updateMonth(event));
    dispatch(getSummaryController({ month: event, year: year }));
  };

  const handleYearChange = event => {
    dispatch(updateYear(event));
    dispatch(getSummaryController({ month: month, year: event }));
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const styles = {
    control: provided => ({
      ...provided,
      backgroundColor: 'transparent',
      border: '1px solid #000',
      borderRadius: '30px',
      borderBottom: '1px solid green',

      padding: '12px 20px',

      minHeight: '32px',
      fontSize: '16px',
      fontFamily: 'Circe',
      lineHeight: '24px',
      fontWeight: '400',
      color: '#000',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#000',
    }),
    menu: provided => ({
      ...provided,
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px',
      color: '#000',
      fontSize: '16px',
      overflow: 'hidden',
    }),
    singleValue: provided => ({
      ...provided,
      color: '#000',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      padding: '0',
      color: '#000',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      padding: '0',
      color: '#000',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
    input: provided => ({
      ...provided,
      padding: '0',
      margin: '0',
    }),
    valueContainer: provided => ({
      ...provided,
      padding: '0',
    }),
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

  const years = [
    { id: 2023, name: 2023 },
    { id: 2022, name: 2022 },
    { id: 2021, name: 2021 },
    { id: 2020, name: 2020 },
    { id: 2019, name: 2019 },
  ];
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Selector
        // defaultInputValue={'months'}
        options={years}
        onSelect={handleYearChange}
        styles={styles}
        placeholder={year.toString()}
      />
      <Selector
        // defaultInputValue={month}
        options={months}
        onSelect={handleMonthChange}
        styles={styles}
        placeholder={months[month].name}
      />
      {/* <select id="year" name="year" value={year} onChange={handleYearChange}>
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
      </select> */}
    </form>
  );
}
