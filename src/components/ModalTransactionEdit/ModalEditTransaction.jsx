import ReactDOM from 'react-dom';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { getUserBalance } from 'redux/auth/authThunks';
import { useDispatch } from 'react-redux';
import { fetchUpdateTransactions } from 'redux/transactions/operations';
import { toast } from 'react-toastify';
import { ReactComponent as CloseIcon } from '../../assets/imgages/close.svg';


import styles from './ModalTransactionEdit.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const MAX_AMOUNT = 10000000;

export const ModalEditTransaction = ({ onClose, transaction }) => {
  const [transactionDate, setTransactionDate] = useState(
    moment(transaction.transactionDate, 'YYYY-MM-DD').format('YYYY-MM-DD')
  );
  const [isActive, setIsActive] = useState(
    transaction.type === 'EXPENSE' ? true : false
  );

  const getCategory = categoryId => {
    switch (categoryId) {
      case 'c9d9e447-1b83-4238-8712-edc77b18b739':
        return 'Main Expenses';
      case '27eb4b75-9a42-4991-a802-4aefe21ac3ce':
        return 'Products';
      case 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4':
        return 'Self care';
      case '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386':
        return 'Car';
      case '76cc875a-3b43-4eae-8fdb-f76633821a34':
        return 'Child care';
      case '128673b5-2f9a-46ae-a428-ec48cf1effa1':
        return 'Household products';
      case '1272fcc4-d59f-462d-ad33-a85a075e5581':
        return 'Education';
      case 'c143130f-7d1e-4011-90a4-54766d4e308e':
        return 'Leisure';
      case '719626f1-9d23-4e99-84f5-289024e437a8':
        return 'Other expenses';
      case '3acd0ecd-5295-4d54-8e7c-d3908f4d0402':
        return 'Entertainment';
      case '063f1132-ba5d-42b4-951d-44011ca46262':
        return 'Income';
      default:
        return;
    }
  };

const translatedCategory = getCategory(transaction.categoryId);
  

  const propsParsedAmount = parseInt(transaction.amount);

  const positivePropsAmount =
    propsParsedAmount >= 0 ? propsParsedAmount : Math.abs(propsParsedAmount);

  const [formData, setFormData] = useState({
    type: transaction.type || '',
    amount: positivePropsAmount,
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


  const toggle = () => {
    setIsActive(!isActive);
    setFormData(prevFormData => ({
      ...prevFormData,
      type: prevFormData.type === 'INCOME' ? 'EXPENSE' : 'INCOME',
    }));
  };

  // const handleSelectDate = date => {
  //   setTransactionDate(date);
  // };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


  const selectedType = isActive ? 'EXPENSE' : 'INCOME';
  const parsedAmount = parseInt(formData.amount);

  const handleSubmit = async e => {
    e.preventDefault();

    if (parsedAmount <= 0) {
      toast.error('Amount must be positive number', {
        className: 'custom-toast-negative',
      });
      return;
    }

    if (parsedAmount > MAX_AMOUNT) {
      toast.error('Amount must be less than or equal to 10,000,000', {
        className: 'custom-toast-negative',
      });

      return;
    }

    const amount = isActive ? Number(`-${parsedAmount}`) : parsedAmount;

    const updatedTransaction = {
      transactionDate: formData.transactionDate,
      type: selectedType,
      categoryId: transaction.categoryId,
      comment: formData.comment,
      amount: amount,
    };

     dispatch(
      fetchUpdateTransactions({
        transactionId: transaction.id,
        credentials: updatedTransaction,
      })
    );
    dispatch(getUserBalance());
    onClose();
  };

  const parseTransactionDate = date => {
    const momentTransactionDate = moment(date, 'YYYY-MM-DD');
    return momentTransactionDate.format('DD.MM.YYYY');
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalAddTrans}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          <CloseIcon className={styles.closeButtonIcon} />
        </button>

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
          <span className={styles.toggleText}>/</span>
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

                <input
                  type="text"
                  className={styles.categoryInput}
                  value={translatedCategory}
                  readOnly
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
                  value={parseTransactionDate(transactionDate)}
                  onChange={setTransactionDate}
                />
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
            <button type="submit" className="button">
              Save
            </button>
            <button
              type="button"
              className="button button--secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modalEditTransaction')
  );
};
