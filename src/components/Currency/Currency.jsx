import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRate } from 'redux/currency/operations';
import Wave from 'react-wavify';
import {
  selectEurBuy,
  selectEurSell,
  selectLastActionTime,
  selectUsdBuy,
  selectUsdSell,
} from 'redux/currency/selectors';
import { updateLastActionTime } from 'redux/currency/slice';
import style from './currency.module.scss';

const Currency = ({ mobile = false }) => {
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
    <div className={style.tablewrapper} style={{ display: mobile && 'block' }}>
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
      <div className={style.wavewraper}>
        <Wave
          mask="url(#mask)"
          fill="#fff"
          options={{
            amplitude: 50,
            speed: 0.05,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.4" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="-20"
                width="2000"
                height="250"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
    </div>
  );
};
export default Currency;
