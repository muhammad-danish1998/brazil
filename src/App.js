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
import Login from './pages/Login';
import Registration from './pages/Register';
import ContextProvider  from './context/ContextProvider';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AuthRoute from './component/AuthRoute';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './component/PrivateRoute';
import Patients from './pages/Patients';


function App() {
  return (
    <>
      <ContextProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/price' component={Price} />
          <Route exact path='/contact' component={Contact} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/patients' component={Patients} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Registration} />
          <Route component={Error} />
        </Switch>
        <ToastContainer />
      </ContextProvider>
    </>
  );
}

export default App;
