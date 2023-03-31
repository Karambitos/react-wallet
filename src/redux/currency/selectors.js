export const selectLastActionTime = state => state.currency.lastActionTime;

export const selectUsdBuy = state => state.currency.currencies.usd.rateBuy;

export const selectUsdSell = state => state.currency.currencies.usd.rateSell;

export const selectEurBuy = state => state.currency.currencies.eur.rateBuy;

export const selectEurSell = state => state.currency.currencies.eur.rateSell;
