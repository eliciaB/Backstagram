import React from 'react'
import { TextField, Button } from '@material-ui/core'

const UserEditData = (props) => {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
  
    React.useEffect(()=>{
        if (props.userData.firstName) {
            // debugger
        }
    }, [props.userData.firstName])

    const saveContent = () => {
        console.log(firstName, lastName, email)
    }
  
    return (
        <div>
            <TextField variant = "outlined"
                defaultValue = {props.userData.email}
                label = "email"
                onChange = {
                    (event)=>{
                        setEmail(event.target.value)
                    }
                }
            />
            <TextField variant = "outlined"
                defaultValue = {props.userData.firstName}
                label = "firstName"
                onChange = {
                    (event)=>{
                        setFirstName(event.target.value)
                    }
                }
            />
            <TextField variant = "outlined"
                defaultValue = {props.userData.lastName}
                label = "lastName"
                onChange = {
                    (event)=>{
                        setLastName(event.target.value)
                    }
                } 
            />
            <Button onClick = {saveContent}>
                Save
            </Button>
        </div>
    )
}

export default UserEditData