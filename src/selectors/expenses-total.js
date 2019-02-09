export default (expenses) => {
  return expenses.reduce((total, expense) => (
    total + parseFloat(expense.amount, 10)
  ), 0);
};