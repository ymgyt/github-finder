import React, {Fragment, Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from "./component/users/Users";

function App() {
  return (
      <div className='App'>
        <Navbar title='Hello'  icon='fab fa-github' />
        <div className='container'>
            <Users />
        </div>
      </div>
  );
}

export default App;
