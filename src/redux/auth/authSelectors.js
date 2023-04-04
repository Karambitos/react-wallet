export const getIsAuth = state => Boolean(state.auth.token);
export const getUserName = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getBalance = state => state.auth.user.balance;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getModalAddState = state => state.auth.isModalAddTransactionOpen;
