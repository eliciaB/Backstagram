import React from 'react'
import logo from '../static/LimeBike-Logo.png';

console.log(logo);

const Header = (props) => {
    return ( 
        <div className="HeaderStyle">
            <img style={{width: '80px', marginRight: '1300px', marginTop: '30px'}} src={logo} alt="Logo" />
            <marquee>
                <h1>{props.title}</h1>
            </marquee>
            <h2 className= "Style2">Do It.</h2>
        </div>
    )
}

export default Header
