import { createStore } from 'redux';

const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.addBy
      }
    case 'MINUS':
      return {
        count: state.count - action.minusBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
};

const store = createStore(reducers);

// used es6 object destructuring and default values
const addBy = ( { addBy = 1 } = {} ) => ({
  type: 'ADD',
  addBy
});

const minusBy = ( { minusBy = 1 } = {} ) => ({
  type: 'MINUS',
  minusBy
});

const reset = () => ({
  type: 'RESET',
});

const set = ( { count = 0 } = {}) => ({
  type: 'SET',
  count
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addBy({addBy: 100})); // adds 100
store.dispatch(addBy()); // adds 1

// usual way 
store.dispatch({
  type: "ADD",
  addBy: 100
});

store.dispatch(minusBy({minusBy: 50}));
store.dispatch(minusBy());

store.dispatch({
  type: "MINUS",
  minusBy: 5
});

// store.dispatch({
//   type: "RESET"
// });

store.dispatch(reset());

// unsubscribe();

store.dispatch({
  type: "SET",
  count: 100
});

store.dispatch(set( {count: 10000} ));