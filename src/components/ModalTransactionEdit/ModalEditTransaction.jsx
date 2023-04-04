import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch} from 'react-redux';
import moment from 'moment';
import styles from './ModalTransaction.module.scss';
import { DatePicker } from './DatePicker/DatePicker';
import { fetchUpdateTransactions } from 'redux/transactions/operations';

import CustomSelect from './CustomSelect/CustomSelect';
import { ReactComponent as CloseIcon } from '../../assets/imgages/close.svg';

export const ModalEditTransaction = ({ onClose, transaction }) => {
  const [transactionDate, setTransactionDate] = useState(
    moment(transaction.transactionDate, 'YYYY-MM-DD').format('YYYY-MM-DD')
  );
  const [isActive, setIsActive] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    transaction.categoryId
  );
  const [formData, setFormData] = useState({
    type: transaction.type || '',
    amount: transaction.amount ,
    transactionDate: transaction.transactionDate || '',
    comment: transaction.comment || '',
  });

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategorySelect = categoryId => {
    setSelectedCategoryId(categoryId);
  };

  const toggle = () => {
    setIsActive(!isActive);
    setFormData(prevFormData => ({
      ...prevFormData,
      type: prevFormData.type === 'INCOME' ? 'EXPENSE' : 'INCOME',
    }));
  };

  const handleSelectDate = date => {
    setTransactionDate(date);
  };

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

 const selectedType = isActive ? 'EXPENSE' : 'INCOME'
 const parsedAmount = parseInt(formData.amount);
  const handleSubmit = e => {
    e.preventDefault();
    const updatedTransaction = {
      transactionDate: formData.transactionDate,
      type: selectedType,
      categoryId: selectedCategoryId,
      comment: formData.comment,
      amount: parsedAmount,
    };
    dispatch(
      fetchUpdateTransactions({
        transactionId: transaction.id,
        credentials: updatedTransaction,
      })
    );
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modalAddTrans}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          <CloseIcon className={styles.closeButtonIcon} />
        </button>
        {/* {children} */}

        <h1 className={styles.title}>Edit transaction</h1>

        <div className={styles.toggleContainer}>
          <span
            onClick={toggle}
            className={`${styles.toggleText} ${
              !isActive ? styles.activeIncome : ''
            }`}
          >
            Income
          </span>

          <span
            onClick={toggle}
            className={`${styles.toggleText} ${
              isActive ? styles.activeExpense : ''
            }`}
          >
            Expense
          </span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            {isActive && (
              <div className={styles.selectorWrapper}>
                <CustomSelect
                  defaultInputValue={transaction.categoryId}
                  onSelect={handleCategorySelect}
                />
              </div>
            )}
            <div className={styles.numberAndCalendarWrapper}>
              <input
                className={styles.inputNumber}
                type="number"
                placeholder="0.00"
                required
                value={formData.amount}
                name="amount"
                onChange={handleChange}
              />
              <div className={styles.datePickerContainer}>
                <input
                  className={styles.inputCalendar}
                  value={transactionDate}
                  onChange={setTransactionDate}
                />
                <DatePicker onSelect={handleSelectDate} />
              </div>
            </div>
            <input
              type="text"
              className={styles.inputComment}
              placeholder="Comment"
              value={formData.comment}
              required
              name="comment"
              onChange={handleChange}
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button type="submit" className={styles.buttonAdd}>
              <span className={styles.buttonAddName}>Edit</span>
            </button>
            <button type="button" className={styles.buttonCancel}>
              <span className={styles.buttonCancelName}>Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modalEditTransaction')
  );
};


