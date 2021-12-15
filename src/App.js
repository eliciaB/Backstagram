import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import ListItem from './components/ListItem'
import List from './components/List'
import InstaPost from './components/InstaPost';
import { Grid } from '@material-ui/core';
import InstaPostPage from './components/InstaPostPage';
import LoginPage from './components/LoginPage';

function App() {
  const [displayElement, setDisplayElement] = React.useState(<InstaPostPage/>)


  function changePage(newPage) {
    if (newPage === "instaPostPage") {
      setDisplayElement(<InstaPostPage/>)
    } 
    if (newPage === "toDoPage") {
      setDisplayElement(<List/>)
    }
  }

  return (
    <div className="App">
      <Header title="To Do" changePage={changePage} />
      <LoginPage />
      <Grid container direction="row" justify="center" alignItems="center"> 
        <Grid item>
          {
            displayElement
          }  
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
