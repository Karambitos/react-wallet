import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import css from './DatePicker.module.css';
import { ReactComponent as DatePickerIcon } from './DatePickerIcon.svg';

export const DatePicker = ({ onSelect }) => {
 const handleChange = e => {
    onSelect(e.format('DD.MM.YYYY'));
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

