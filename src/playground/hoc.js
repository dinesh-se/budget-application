// Higher Order Component - A component that renders another components
// goal of HOC is reuse, render hijacking, prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Admin only content</p>}
      <WrappedComponent {...props} />
    </div>
  );
}
const withAuthMessage = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>Authenticated content.</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthMessage(Info);

// ReactDOM.render(<AuthInfo isAdmin={true} info='Nothing to display'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Nothing to display'/>, document.getElementById('app'));