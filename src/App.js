import React, { useState } from 'react';
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
import SignUpPage from './components/SignUpPage';
import MySnackBar from './components/MySnackBar';

function App() {
  const [displayElement, setDisplayElement] = React.useState()
  const [pageName, setPageName] = React.useState("loginPage")
  const [userData, setUserData] = React.useState()
  const [message, setMessage] = React.useState("passmessage")
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    if (pageName === "instaPostPage") {
      setDisplayElement(<InstaPostPage userData = {userData}/>)
    } 
    if (pageName === "toDoPage") {
      setDisplayElement(<List/>)
    }
    if (pageName === "loginPage") {
      setDisplayElement(<LoginPage changePage={setPageName} setUserData = {setUserData}/>)
    }
    if (pageName === "signUpPage") {
      setDisplayElement(<SignUpPage changePage = {setPageName}/>)
    }
  }, [pageName])

  React.useEffect(()=>{
    if (userData) {
      setMessage("Welcome, " + userData.firstName)
      setIsLoggedIn(true)
    }
  }, [userData])

  const logout = () => {
    setPageName("loginPage")
    setIsLoggedIn(false)
    setMessage("Goodbye, " + userData.firstName)
    setUserData(null)
  }

  


  return (
    <div className="App">
      <Header title="To Do" changePage={setPageName} isLoggedIn={isLoggedIn} logout={logout}/>
      <Grid container direction="row" justify="center" alignItems="center"> 
        <Grid item>
          {
            displayElement
          }  
        </Grid>
      </Grid>
      <MySnackBar message = {message}/>
    </div>
  );
}

export default App;
