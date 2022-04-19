import React from 'react'
import { TextField } from '@material-ui/core'

const UserEditData = (props) => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
  
  
    return (
        <div>
            <TextField variant = "outlined"
                defaultValue = {email}
                label = "email"
                onChange = {
                    (event)=>{
                        setEmail(event.target.value)
                    }
                }
            />
            <TextField variant = "outlined"
                defaultValue = {firstName}
                label = "firstName"
                onChange = {
                    (event)=>{
                        setFirstName(event.target.value)
                    }
                }
            />
            <TextField variant = "outlined"
                defaultValue = {lastName}
                label = "lastName"
                onChange = {
                    (event)=>{
                        setLastName(event.target.value)
                    }
                } 
            />
        </div>
    )
}

export default UserEditData