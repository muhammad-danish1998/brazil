import React from 'react';
import Home from './component/Home';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Price from './pages/Price'
import Service from './pages/Service'
import Error from './pages/Error'


function App() {
  return (
    <>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/price' component={Price} />
        <Route exact path='/contact' component={Contact} />
        <Route  component={Error} />
    </Switch>
    </>
  );
}

export default App;
