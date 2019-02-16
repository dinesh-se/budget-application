import moment from 'moment';

export default [
  {
    id: '1',
    description: 'house rent',
    amount: 1500000,
    createdAt: 0,
    note: ''
  },
  {
    id: '2',
    description: 'bike rent',
    amount: 150000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: ''
  },
  {
    id: '3',
    description: 'bill payment',
    amount: 10000000,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: 'credit card'
  }
];