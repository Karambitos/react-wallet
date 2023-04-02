export const selectAllCategories = state =>
  state.transactions.categoriesSummary.categories;
export const selectIncomeSummary = state =>
  state.transactions.categoriesSummary.incomeSummary;
export const selectExpenseSummary = state => state =>
  state.transactions.categoriesSummary.expenseSummary;
