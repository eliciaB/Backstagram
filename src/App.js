import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import ListItem from './components/ListItem'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Header title= "To Do" />
      <List />
    </div>
  );
}

export default App;
