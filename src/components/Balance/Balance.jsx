import { useSelector } from 'react-redux';
import style from './balance.module.scss';
// import { getBalance } from '../../redux/auth/authSelectors';
import { selectUserBalance } from 'redux/balance/selectors';

const Balance = () => {
  // const balance = useSelector(getBalance);
  const userBalance = useSelector(selectUserBalance);
  // console.log(userBalance);
  const formattedBalance = `₴ ${formattedValue(userBalance.toFixed(2))}`;

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
        <span className={style.balancesumm}>{formattedBalance}</span>
      </div>
    </div>
  );
};

export default Balance;
