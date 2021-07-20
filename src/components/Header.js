import React from 'react'
import logo from '../static/LimeBike-Logo.png';
import Slide from '@material-ui/core/Slide';

console.log(logo);

const Header = (props) => {
    return ( 
        <div className="HeaderStyle">
            <Slide direction="left" timeout={7000} in={true} mountOnEnter unmountOnExit>
               <div> 
                    <img className="ImageStyleLogo" src={logo} alt="Logo" />
                    <h1 className="HeaderTextStyle">{props.title}</h1>
               </div>
            </Slide> 
            <h2 className= "Style2">Do It.</h2>
        </div>
    )
}

export default Header
