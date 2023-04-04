import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import css from './DatePicker.module.scss';

export const DatePicker = () => {
  const inputProps = {
    placeholder: 'DD.MM.YYYY',
    name: 'date',
  };

  const renderInput = (props, openCalendar) => {
    return (
      <input
        {...props}
        className={css.dateInput}
        type="text"
        onClick={openCalendar}
      />
    );
  };

  return (
    <Datetime
      closeOnSelect
      timeFormat={false}
      dateFormat={'DD.MM.YYYY'}
      initialValue={new Date()}
      inputProps={inputProps}
      renderInput={renderInput}
    />
  );
};
