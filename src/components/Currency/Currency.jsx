import style from './currency.module.scss';

const getExchangeRate = async () => {
  const url = 'https://api.monobank.ua/bank/currency';
  const usdCurrencyCode = 840; // ISO 4217 код для доллара
  const eurCurrencyCode = 978; // ISO 4217 код для евро
  const uahCurrencyCode = 980; // ISO 4217 код для гривны

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    const usdToUah = data.find(
      rate =>
        rate.currencyCodeA === usdCurrencyCode &&
        rate.currencyCodeB === uahCurrencyCode
    );

    const eurToUah = data.find(
      rate =>
        rate.currencyCodeA === eurCurrencyCode &&
        rate.currencyCodeB === uahCurrencyCode
    );

    if (usdToUah) {
      console.log(
        `Курс обмена USD/UAH: ${usdToUah.rateBuy} (покупка), ${usdToUah.rateSell} (продажа)`
      );
    } else {
      console.log('Информация о курсе USD/UAH не найдена.');
    }

    if (eurToUah) {
      console.log(
        `Курс обмена EUR/UAH: ${eurToUah.rateBuy} (покупка), ${eurToUah.rateSell} (продажа)`
      );
    } else {
      console.log('Информация о курсе EUR/UAH не найдена.');
    }
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error.message}`);
  }
};

const Currency = () => {
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
            <td>1976</td>
            <td>300</td>
          </tr>
          <tr className={style.tablebodytext}>
            <td>EUR</td>
            <td>1976</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Currency;
