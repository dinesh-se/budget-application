import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header';
import BudgetDashboardPage from './../components/Dashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpense';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={BudgetDashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;