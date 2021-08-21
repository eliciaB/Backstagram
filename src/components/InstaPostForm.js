import { Paper, TextField, Button, Grid } from '@material-ui/core'
import React from 'react'


const InstaPostForm = () => {
    return (
        <div>
            <Paper className="InstaPostFormStyle">
                <Grid container 
                    alignItems="center" 
                    direction="row"
                    justify="center"
                >
                    <Grid item xs><TextField variant="outlined"/></Grid>
                    <Grid item container xs
                        alignItems="center" 
                        direction="column"
                        justify="center"
                    >
                        <Button> Add image </Button>
                        <Button> Post </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default InstaPostForm
