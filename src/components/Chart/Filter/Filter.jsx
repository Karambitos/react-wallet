import React, { useState } from 'react';
import styles from './Filter.module.scss';

export default function Filter() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const handleYearChange = event => {
    setYear(event.target.value);
  };

  const handleMonthChange = event => {
    setMonth(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Selected year: ${year}, month: ${month}`);
    setYear('');
    setMonth('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select id="year" name="year" value={year} onChange={handleYearChange}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2021">2020</option>
        <option value="2021">2019</option>
      </select>
      <select
        id="month"
        name="month"
        value={month}
        onChange={handleMonthChange}
      >
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </form>
  );
}
