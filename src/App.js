import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router';
import DashBoard from './Components/DashBoard/DashBoard'
import Home from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component ={Home}/>                   
      <Route exact path='/dashboard' component={DashBoard}/>      
      </Switch>
    </div>
  );
}

export default App;
