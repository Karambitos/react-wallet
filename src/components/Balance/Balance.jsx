import { useSelector } from 'react-redux';
import { getBalanse } from 'redux/auth/authSelectors';
import style from './balance.module.scss';

const Balance = () => {
  const userBalance = useSelector(getBalanse);
  const formattedUserBalance = `₴ ${formattedValue(userBalance.toFixed(2))}`;

  function formattedValue(value) {
    const formattedNum = Math.abs(value).toFixed(2);
    const formatter = new Intl.NumberFormat('en-US');
    const formattedString = formatter.format(formattedNum);
    const replacedString = formattedString.replace(',', ' ');
    const decimalPart = formattedNum.split('.')[1] || '00';
    const isNegative = value.toString().includes('-') ? '-' : '';
    return `${isNegative}${replacedString}.${decimalPart}`;
  }
  return (
    <div className={style.balance}>
      <div className={style.balancewrapper}>
        <span className={style.balancetext}>Your balance</span>
        <span className={style.balancesumm}>{formattedUserBalance}</span>
      </div>
    </div>
  );
};

export default Balance;
