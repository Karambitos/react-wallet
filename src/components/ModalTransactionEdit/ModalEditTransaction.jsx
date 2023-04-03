import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styles from './ModalTransaction.module.scss';
import { DatePicker } from './DatePicker/DatePicker';
import { fetchUpdateTransactions } from 'redux/transactions/operations';
// import { selectModalAddState } from 'redux/modalAddTransaction/selector';
// import { selectCategories } from 'redux/transactions/selectors';
// import { setModalAddTransactionOpen } from 'redux/modalAddTransaction/slice';
// import { fetchAddTransactions } from 'redux/transactions/operations';
// import { fetchAllCategories } from 'redux/transactions/operations';
// import Selector from '../Selector/Selector';
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
    amount: transaction.amount || '',
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

  console.log(selectedCategoryId);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTransaction = {
      transactionDate: formData.transactionDate,
      type: formData.type,
      categoryId: formData.categoryId,
      comment: formData.comment,
      amount: formData.amount,
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

//  // const [type, setType] = useState('INCOME');
//  const [categoryId, setCategoryId] = useState('');
//  const [comment, setComment] = useState('');
//  const [amountNumber, setAmountNumber] = useState('');
//  const [categoryFiltered, setCategoryFiltered] = useState([]);

//  const dispatch = useDispatch();
//  const modalState = useSelector(selectModalAddState);
//  const categories = useSelector(selectCategories);

//  useEffect(() => {
//    dispatch(fetchAllCategories());
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, []);

//  useEffect(() => {
//    if (!categories) {
//      return;
//    }
//    filteredAllCategories();
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [isActive, categories]);

//  const filteredAllCategories = () => {
//    const filteredCategory = categories.filter(
//      category => category.type === type
//    );

//    if (filteredCategory.length === 1) {
//      setCategoryId(filteredCategory[0].id);
//    }
//    setCategoryFiltered(filteredCategory);
//  };

//  const handleSubmit = e => {
//    e.preventDefault();
//    const amount = isActive ? Number(`-${amountNumber}`) : Number(amountNumber);

//    dispatch(
//      fetchAddTransactions({
//        transactionDate,
//        type,
//        categoryId,
//        comment,
//        amount,
//      })
//    );
//    dispatch(setModalAddTransactionOpen(false));
//  };

//  const handleOptionSelect = useCallback(
//    option => {
//      setCategoryId(option);
//    },
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    [categories]
//  );

//  const handleSelectDate = date => {
//    setTransactionDate(date);
//  };

//  const handleChange = event => {
//    const { name, value } = event.target;
//    switch (name) {
//      case 'comment':
//        setComment(value);
//        break;

//      case 'amount':
//        setAmountNumber(value);
//        break;

//      default:
//        return;
//    }
//  };
