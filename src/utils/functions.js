// Helper functions
const partition = (array, filter) => {
  let pass = [],
    fail = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
};

const totalDailyValues = (items) => {
  return items.map((item) => item.daily).reduce((a, b) => a + b, 0);
};

// Exported Functions
export const titleCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const formatMoney = (cents) => {
  // take a value in cents and return a string formatted in dollars
  // eg 312374 => $3,123.74
  return (
    "$" +
    (parseInt(cents) / 100)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};

export const calcBudgetTotals = (serverData) => {
  const [budgetMaxArray, budgetCurrentArray] = partition(
    serverData,
    (item) => item.type === "income"
  );
  const incomeArray = serverData.filter(
    (budgetItem) => budgetItem.type === "income"
  );
  const savingsArray = serverData.filter(
    (budgetItem) => budgetItem.type === "savings"
  );
  const expensesArray = serverData.filter(
    (budgetItem) => budgetItem.type === "expense"
  );
  const debtArray = serverData.filter(
    (budgetItem) => budgetItem.type === "debt"
  );
  return {
    incomeArray,
    savingsArray,
    expensesArray,
    debtArray,
    budgetMax: totalDailyValues(budgetMaxArray) * 30,
    budgetCurrent: totalDailyValues(budgetCurrentArray) * 30,
  };
};
