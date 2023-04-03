import { useSelector } from 'react-redux';
import style from './balance.module.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const isFirstRender = useRef(true);
  const transactions = useSelector(state => state.transactions.transactions);
  const formattedBalance = `₴ ${formattedValue(balance.toFixed(2))}`;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    async function getCurrentBalance() {
      try {
        const response = await axios.get(`/api/users/current`);
        setBalance(response.data.balance);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCurrentBalance();
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
          {formattedBalance}
        </span>
      </div>
    </div>
  );
};

export default Balance;
