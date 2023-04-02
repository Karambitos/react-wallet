import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styles from './ModalTransaction.module.scss';
import { DatePicker } from './DatePicker/DatePicker';
import { selectModalAddState } from 'redux/modalAddTransaction/selector';
import { selectAllCategories } from 'redux/transactions/selectors';
import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';
import { fetchAddTransactions } from 'redux/transactions/operations';
import { fetchAllCategories } from 'redux/transactions/operations';
import Selector from './Selector/Selector';

export const ModalTransaction = () => {
  const [transactionDate, setTransactionDate] = useState(
    moment().format('YYYY-MM-DD')
  );
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState('INCOME');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amountNumber, setAmountNumber] = useState('');
  const [categoryFiltered, setCategoryFiltered] = useState([]);

  const dispatch = useDispatch();
  const modalState = useSelector(selectModalAddState);
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchAllCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!categories) {
      return;
    }
    filteredAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, categories]);

  const filteredAllCategories = () => {
    const filteredCategory = categories.filter(
      category => category.type === type
    );

    console.log(categories);
    if (filteredCategory.length === 1) {
      setCategoryId(filteredCategory[0].id);
    }
    setCategoryFiltered(filteredCategory);
  };
  const handleCloseModal = () => {
    dispatch(setModalAddTransactionOpen(false));
  };
  const toggle = () => {
    setIsActive(!isActive);
    setType(isActive ? 'INCOME' : 'EXPENSE');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const amount = isActive ? Number(`-${amountNumber}`) : Number(amountNumber);

    dispatch(
      fetchAddTransactions({
        transactionDate,
        type,
        categoryId,
        comment,
        amount,
      })
    );
  };

  const handleOptionSelect = useCallback(
    option => {
      setCategoryId(option);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categories]
  );

  const handleSelectDate = date => {
    setTransactionDate(date);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'comment':
        setComment(value);
        break;

      case 'amount':
        setAmountNumber(value);
        break;

      default:
        return;
    }
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
              {isActive && (
                <Selector
                  options={categoryFiltered}
                  onSelect={handleOptionSelect}
                />
              )}

              <input
                className={styles.inputNumber}
                type="number"
                placeholder="0.00"
                required
                value={amountNumber}
                name="amount"
                onChange={handleChange}
              />
              <div className={styles.datePickerContainer}>
                <input
                  className={styles.inputCalendar}
                  value={transactionDate}
                  onChange={setTransactionDate}
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
                value={comment}
                required
                name="comment"
                onChange={handleChange}
              />
              <div className={styles.buttonsContainer}>
                <button type="submit" className={styles.buttonAdd}>
                  <span className={styles.buttonAddName}>Add</span>
                </button>
                <button
                  type="button"
                  className={styles.buttonCancel}
                  onClick={handleCloseModal}
                >
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
