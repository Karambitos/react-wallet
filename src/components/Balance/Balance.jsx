import style from './balance.module.scss';

const Balance = () => {
  return (
    <div className={style.balance}>
      <div className={style.balancewrapper}>
        <span className={style.balancetext}>Your balance</span>
        <span className={style.balancesumm}>₴ 24 000.00</span>
      </div>
    </div>
  );
};

export default Balance;
