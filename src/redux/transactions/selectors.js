export const selectCategories = state => state.transactions.categories;
export const selectMonth = state => state.transactions.month;
export const selectYear = state => state.transactions.year;

export const sortedTransactions = state => {
  return [...state.transactions.transactions].sort((a, b) =>
    b.transactionDate.localeCompare(a.transactionDate)
  );
};

export const selectAllCategories = state =>
  state.transactions.categoriesSummary.categories;
export const selectIncomeSummary = state =>
  state.transactions.categoriesSummary.incomeSummary;
export const selectExpenseSummary = state =>
  state.transactions.categoriesSummary.expenseSummary;

export const selectIsLoading = state => state.transactions.isLoading;
