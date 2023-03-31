import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRate } from 'redux/currency/operations';
import {
  selectEurBuy,
  selectEurSell,
  selectLastActionTime,
  selectUsdBuy,
  selectUsdSell,
} from 'redux/currency/selectors';
import { updateLastActionTime } from 'redux/currency/slice';
import style from './currency.module.scss';

const Currency = () => {
  const dispatch = useDispatch();
  const lastActionTime = useSelector(selectLastActionTime);
  const usdBuy = useSelector(selectUsdBuy).toFixed(2);
  const usdSell = useSelector(selectUsdSell).toFixed(2);
  const eurBuy = useSelector(selectEurBuy).toFixed(2);
  const eurSell = useSelector(selectEurSell).toFixed(2);

  const getCurrencyRate = () => {
    const currentTime = Date.now();
    const hourInMs = 60 * 60 * 1000;

    if (!lastActionTime || currentTime - lastActionTime > hourInMs) {
      dispatch(currencyRate());
      dispatch(updateLastActionTime(currentTime));
    } else {
      return;
    }
  };

  useEffect(() => {
    getCurrencyRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <table className={style.table}>
        <thead className={style.tablehead}>
          <tr className={style.tableheadtext}>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={style.tablebody}>
          <tr className={style.tablebodytext}>
            <td>USD</td>
            <td>{usdBuy}</td>
            <td>{usdSell}</td>
          </tr>
          <tr className={style.tablebodytext}>
            <td>EUR</td>
            <td>{eurBuy}</td>
            <td>{eurSell}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Currency;
