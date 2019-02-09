import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const BudgetDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpenseSummary />
  </div>
);

export default BudgetDashboardPage;