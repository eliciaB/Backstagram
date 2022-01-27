import { Paper, TextField, Button } from '@material-ui/core'
import React from 'react'

const LoginPage = (props) => {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    const submitForm = () => {
        console.log(email, password)
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                const userData = JSON.parse(responsejson.body)
                props.setUserData(userData)
                props.changePage("instaPostPage")
            }
        }) 
    }

    return (
        <div>
            <Paper className="LoginPageForm">
                <TextField variant="outlined"
                    value={email}
                    label="email"
                    onChange={
                        (event)=>{
                            setEmail(event.target.value)
                        }
                    }
                />
                <TextField variant="outlined"
                    value={password}
                    label="password"
                    onChange={
                        (event)=>{
                            setPassword(event.target.value)
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

export default LoginPage
