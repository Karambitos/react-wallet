import { useSelector } from 'react-redux';
import { getBalanse } from 'redux/auth/authSelectors';
import style from './balance.module.scss';
import { useEffect, useState } from 'react';

const Balance = () => {
  const [balanceAfter, setBalanceAfter] = useState(0);
  const userBalance = useSelector(getBalanse);
  const transactions = useSelector(state => state.transactions.transactions);
  const formattedUserBalance = `₴ ${formattedValue(userBalance.toFixed(2))}`;
  const formattedBalanceAfter = `₴ ${formattedValue(balanceAfter.toFixed(2))}`;

  useEffect(() => {
    if (transactions.length !== 0) {
      setBalanceAfter(transactions[transactions.length - 1].balanceAfter);
    }
  }, [transactions]);

  function formattedValue(value) {
    const formattedNum = Math.abs(value).toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    const formattedString = formatter.format(formattedNum);
    const replacedString = formattedString.replaceAll(',', ' ');
    const decimalPart = formattedNum.split('.')[1] || '00';
    const isNegative = value.toString().includes('-') ? '-' : '';
    return `${isNegative}${replacedString}.${decimalPart}`;
  }
  return (
    <div className={style.balance}>
      <div className={style.balancewrapper}>
        <span className={style.balancetext}>Your balance</span>
        <span className={style.balancesumm}>
          {formattedBalanceAfter || formattedUserBalance}
        </span>
      </div>
    </div>
  );
};

export default Balance;
