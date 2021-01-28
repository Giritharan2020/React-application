import React from 'react';
import './App.css';
// import SignInOutContainer from './containers';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/login';
import Signup from './Components/signup';
import DataTable from './Components/gridtable'


function App() {

  return (
  <Router>
      <div className="App">
       <Switch>
         <Route exact path='/' component= {Login}/>
         <Route exact path='/login' component= {Login}/>
         <Route exact path='/register' component= {Signup}/>
         <Route exact path='/grid' component= {DataTable}/>

       </Switch>
    </div>
    </Router>
  );
}

export default App;
