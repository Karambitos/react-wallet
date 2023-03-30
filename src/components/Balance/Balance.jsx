import style from './balance.module.scss';

const Balance = () => {
  return (
    <div className={style.balance}>
      <div className={style.balancewrapper}>
        <p className={style.balancetext}>Your balance</p>
        <p className={style.balancesumm}>₴ 24 000.00</p>
      </div>
    </div>
  );
};

export default Balance;
