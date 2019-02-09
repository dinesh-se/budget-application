import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
  return (
    <div>
      <h5>Total expense: {numeral(getTotalExpenses(props.expenses) / 100).format('$0,0.00')}</h5>
    </div>
  )
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters) 
});

export default connect(mapStateToProps)(ExpenseSummary);