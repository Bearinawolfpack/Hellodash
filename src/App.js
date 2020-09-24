import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/AppComponents/Home';
import NavigationBar from './Components/AppComponents/Navbar';
import FindIdentity from './Components/FunctionComponents/Util/FindIdentity';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />¸
          <Route path="/util/identity" component={FindIdentity} />¸
        </Switch>
      </Router>
    </>
  );
}

export default App;
