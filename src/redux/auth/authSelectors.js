export const getIsAuth = state => Boolean(state.auth.token);
export const getUserName = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getBalance = state => state.auth.user.balance;
export const getIsLoading = state => state.isLoading;
