import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('abc-def');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc-def'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc-def', {
    description: 'expense description',
    note: 'expense note'
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc-def",
    updates: {
      description: 'expense description',
      note: 'expense note'
    }
  })
});

test('should setup add expense object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1500000,
    createdAt: 1000,
    note: 'Feb month rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
});