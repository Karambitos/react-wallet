export const selectCategories = state => state.transactions.categories;
export const selectAllTransactions = state => state.transactions.transactions;

export const selectAllCategories = state =>
  state.transactions.categoriesSummary.categories;
export const selectIncomeSummary = state =>
  state.transactions.categoriesSummary.incomeSummary;
export const selectExpenseSummary = state =>
  state.transactions.categoriesSummary.expenseSummary;

export const selectIsLoading = state => state.transactions.isLoading;
