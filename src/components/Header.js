import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Family Budget</h1>
    <ul>
      <li>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='is-active' to='/create'>Add Expense</NavLink>
      </li>
      <li>
        <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;