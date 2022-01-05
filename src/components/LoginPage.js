import { Paper, TextField, Button } from '@material-ui/core'
import React from 'react'

const LoginPage = () => {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()


    return (
        <div>
            loginPagePlaceholder
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
                <Button>Submit</Button>
            </Paper>

        </div>
    )
}

export default LoginPage
