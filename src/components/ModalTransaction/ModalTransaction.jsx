import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ModalTransaction.module.scss';
import { DatePicker } from './DatePicker/DatePicker';
import { selectModalAddState } from 'redux/modalAddTransaction/selector'
import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';


import moment from 'moment';
import Selector from './Selector/Selector';

const options = ['Option 1', 'Option 2', 'Option 3'];

export const ModalTransaction = () => {
  const [date, setDate] = useState(moment().format('DD.MM.YYYY'));
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();
  const modalState = useSelector(selectModalAddState);
  
const handleCloseModal = () => {
  dispatch(setModalAddTransactionOpen(false));
};
  const toggle = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleOptionSelect = option => {
    console.log(`Selected option: ${option}`);
  };

  const handleSelectDate = date => {
    setDate(date);
  };

  return (
    <>
      {modalState ? (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2 className={styles.title}>Add transaction</h2>

            <div className={styles.toggleContainer}>
              <span
                className={`${styles.toggleText} ${
                  !isActive ? styles.activeIncome : ''
                }`}
              >
                Income
              </span>
              <div
                className={`${styles.toggleButton} ${
                  isActive ? styles.active : ''
                }`}
                onClick={toggle}
              ></div>
              <span
                className={`${styles.toggleText} ${
                  isActive ? styles.activeExpense : ''
                }`}
              >
                Expense
              </span>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <Selector options={options} onSelect={handleOptionSelect} />

              <input
                className={styles.inputNumber}
                type="number"
                placeholder="0.00"
                required
              />
              <div className={styles.datePickerContainer}>
              <input
                className={styles.inputCalendar}
                value={date}
                onChange={setDate}
              />
              <DatePicker
                onSelect={handleSelectDate}
                initialValue={new Date()}
              />
            </div>
              <input
                type="text"
                className={styles.inputComment}
                placeholder="Comment"
                required
              />
              <div className={styles.buttonsContainer}>
                <button
                  type="submit"
                  className={styles.buttonAdd}
                  onClick={handleCloseModal}
                >
                  <span className={styles.buttonAddName}>Add</span>
                </button>
                <button type="button" className={styles.buttonCancel}>
                  <span className={styles.buttonCancelName}>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
