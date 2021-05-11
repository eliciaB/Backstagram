import React from 'react'

const Header = (props) => {
    return ( 
        <div className="HeaderStyle">
            <marquee>
                <h1>{props.title}</h1>
            </marquee>
            <h2 className= "Style2">Do It.</h2>
        </div>
    )
}

export default Header
