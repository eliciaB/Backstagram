import React from 'react'
import logo from '../static/LimeBike-Logo.png';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

console.log(logo);

const Header = (props) => {
    const [title, setTitle] = React.useState("Backstagram")
    const [subtitle, setSubtitle] = React.useState("Not today, Satan")
    
    function updateHeader(newPage) {
        if (newPage === "instaPostPage") {
            setTitle("Backstagram")
            setSubtitle("Not today, Satan")
        }
        if (newPage === "toDoPage") {
            setTitle("To Do List")
            setSubtitle("Do it.")
        }
        if (newPage === "loginPage") {
            setTitle("Login")
            setSubtitle("")
        }

        props.changePage(newPage)
    }

    return ( 
        <div className="HeaderStyle">
            <Slide direction="left" timeout={7000} in={true} mountOnEnter unmountOnExit>
               <div className="ImageTitleContainer"> 
                    <img className="ImageStyleLogo" src={logo} alt="Logo" />
                    <h1 className="HeaderTextStyle">{title}</h1>
               </div>
            </Slide> 
            <h2 className= "Style2">{subtitle}</h2>
            <Button onClick = {() => updateHeader("instaPostPage")}>
                InstaPostPage
            </Button>
            <Button onClick = {() => updateHeader("toDoPage")}>
                ToDoPage
            </Button>
            <Button onClick = {() => updateHeader("loginPage")}>
                LoginPage
            </Button>
            <Button onClick = {() => updateHeader("signUpPage")}>
                SignUpPage
            </Button>
        </div> 
    )
}

export default Header
