import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import css from './DatePicker.module.css';
import { ReactComponent as DatePickerIcon } from './DatePickerIcon.svg';

export const DatePicker = ({ onSelect }) => {
  const handleChange = e => {
    // console.log(e._d);
    onSelect(e._d);
  };

  const renderInput = (props, openCalendar) => {
    return (
      <DatePickerIcon onClick={openCalendar} className={css.datePickerIcon} />
    );
  };
  return (
    <Datetime
      renderInput={renderInput}
      closeOnSelect
      onChange={handleChange}
      timeFormat={false}
    />
  );
};

// import { DatePicker } from 'components/DatePicker/DatePicker';
// import { useState } from 'react';

// const Home = () => {
//   const [date, setDate] = useState('');
//   console.log('date from home: ', date);

//   const handleSelect = date => {
//     setDate(date);
//   };
//   return (
//     <>
//       <h1>HOME</h1>
//       <DatePicker onSelect={handleSelect} />
//     </>
//   );
// };

// export default Home;
