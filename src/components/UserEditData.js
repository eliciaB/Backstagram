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
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/users/" + props.userData.email, {
            method: "PUT",
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                /**
                 * 1.) get userData object from props and put into another variable
                 * 2.) update copy userData object with updated info
                 * 3.) call props.setUserData with updated copy of userData
                 */


                props.setMessage("Data saved" )
                
                const userDataCopy = props.userData 
                if (firstName !== "") {
                    userDataCopy.firstName = firstName
                }
                if (email !== "") {
                    userDataCopy.email = email
                }
                if (lastName !== "") {
                    userDataCopy.lastName = lastName
                }
                props.setUserData(userDataCopy)

            }
        }) 
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