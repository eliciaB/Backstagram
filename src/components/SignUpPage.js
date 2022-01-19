import React from 'react'
import { Paper, TextField, Button } from '@material-ui/core'

const SignUpPage = (props) => {
    const [firstName, setFirstName] = React.useState()
    const [lastName, setLastName] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [confirmPassword, setConfirmPassword] = React.useState()

    const submitForm = () => {
        if ( password === confirmPassword) {
            console.log(firstName, lastName, email, password, confirmPassword)
            fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/signup", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(response => response.json()).then(responsejson => {
                if (responsejson.statusCode === 200) {
                    props.changePage("loginPage")
                }
            })    

        }
    
    }



    return (
        <div>
            <Paper className = "SignUpPageForm">
                <TextField variant = "outlined"
                    value = {firstName}
                    label = "first name" 
                    onChange={
                        (event)=>{
                            setFirstName(event.target.value)
                        }
                    }
                />
                <TextField variant = "outlined"
                    value = {lastName}
                    label = "last name" 
                    onChange={
                        (event)=>{
                            setLastName(event.target.value)
                        }
                    }
                />
                <TextField variant = "outlined"
                    value = {email}
                    label = "email" 
                    onChange={
                        (event)=>{
                            setEmail(event.target.value)
                        }
                    }
                />
                <TextField variant = "outlined"
                    value = {password}
                    label = "password"
                    onChange={
                        (event)=>{
                            setPassword(event.target.value)
                        }
                    }
                />
                <TextField variant = "outlined"
                    value = {confirmPassword}
                    label = "confirm password"
                    onChange={
                        (event)=>{
                            setConfirmPassword(event.target.value)
                        }
                    }
                />
                <Button onClick = {() => submitForm()}>
                    Submit
                </Button>  
            </Paper>
        </div>
    )
}

export default SignUpPage
