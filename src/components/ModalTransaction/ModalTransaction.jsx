import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styles from './ModalTransaction.module.scss';
import { DatePicker } from './DatePicker/DatePicker';
import { selectCategories } from 'redux/transactions/selectors';
import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';
import { fetchAddTransactions } from 'redux/transactions/operations';
import { fetchAllCategories } from 'redux/transactions/operations';
import Selector from '../Selector/Selector';
import { ReactComponent as CloseIcon } from '../../assets/imgages/close.svg';
import { getCurrentUser } from 'redux/auth/authThunks';

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
  const categories = useSelector(selectCategories);

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

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const filteredAllCategories = () => {
    const filteredCategory = categories.filter(
      category => category.type === type
    );

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

    if (categoryId === '') {
      alert('!!!!');
      return;
    }
    const amount = isActive ? Number(`-${amountNumber}`) : Number(amountNumber);

    console.log(transactionDate);
    dispatch(
      fetchAddTransactions({
        transactionDate,
        type,
        categoryId,
        comment,
        amount,
      })
    );
    // dispatch(getCurrentUser());
    dispatch(setModalAddTransactionOpen(false));
    handleCloseModal();
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

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleBackDropClick}>
      <div className={styles.modalAddTrans}>
        <button className={styles.closeButton} onClick={handleCloseModal}>
          <CloseIcon className={styles.closeButtonIcon} />
        </button>
        {/* {children} */}

        <h1 className={styles.title}>Add transaction</h1>

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
          <div className={styles.inputsWrapper}>
            {isActive && (
              <div className={styles.selectorWrapper}>
                <Selector
                  options={categoryFiltered}
                  onSelect={handleOptionSelect}
                />
              </div>
            )}
            <div className={styles.numberAndCalendarWrapper}>
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
          </div>
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
    </div>,
    document.getElementById('modalAddTransaction')
  );
};
