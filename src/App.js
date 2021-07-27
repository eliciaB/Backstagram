import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import ListItem from './components/ListItem'
import List from './components/List'
import InstaPost from './components/InstaPost';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header title= "To Do" />
      <Grid container direction="row" justify="center" alignItems="center"> 
        <Grid item>
          <InstaPost />
        </Grid>
        <Grid item>
          <List />  
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
