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
  const [displayElement, setDisplayElement] = React.useState()
  const [pageName, setPageName] = React.useState("loginPage")

  React.useEffect(() => {
    if (pageName === "instaPostPage") {
      setDisplayElement(<InstaPostPage/>)
    } 
    if (pageName === "toDoPage") {
      setDisplayElement(<List/>)
    }
    if (pageName === "loginPage") {
      setDisplayElement(<LoginPage changePage={setPageName}/>)
    }
  }, [pageName])

  return (
    <div className="App">
      <Header title="To Do" changePage={setPageName} />
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
