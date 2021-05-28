import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import EditUser from './Users/EditUser';
import UserView from './Users/UserView';

const App = () => {
  const [response, setResponse] = useState({});

  return (
    // <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <p>About</p>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/users'>
            <UserView />
          </Route>
          <Route exact path='/user/:id'>
            <EditUser />
          </Route>
          <Route path='/'>
            <p>home</p>
          </Route>
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
};

export default App;
