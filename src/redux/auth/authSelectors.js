export const getIsAuth = state => Boolean(state.auth.token);
export const getUserName = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getBalanse = state => state.auth.user.balance;
