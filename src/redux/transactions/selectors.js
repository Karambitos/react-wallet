export const selectCategories = state => state.transactions.categories;

export const sortByDateDescending = state => {
  const array = [...state.transactions.transactions];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j].transactionDate < array[j + 1].transactionDate) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array.reverse();
};

export const selectAllCategories = state =>
  state.transactions.categoriesSummary.categories;
export const selectIncomeSummary = state =>
  state.transactions.categoriesSummary.incomeSummary;
export const selectExpenseSummary = state =>
  state.transactions.categoriesSummary.expenseSummary;

export const selectIsLoading = state => state.transactions.isLoading;
