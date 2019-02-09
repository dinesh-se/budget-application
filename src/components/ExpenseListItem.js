import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ( { dispatch, id, description, amount, createdAt } ) => (
  <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      {amount}-{createdAt}&nbsp;
      <button onClick={() => {
        dispatch(removeExpense(id));
      }}>
      Remove</button>
  </div>
);

export default connect()(ExpenseListItem);