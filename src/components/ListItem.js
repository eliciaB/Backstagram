import React from 'react'
import Paper from '@material-ui/core/Paper';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ListItem = ({name}) => {
    return (
        <div className="ListItemStyle">
            <Paper>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item> 
                        <div className="ListItemNameContainerStyle">
                            {name}
                        </div>
                    </Grid>
                    <Grid item> 
                        <Button>
                            <ClearSharpIcon></ClearSharpIcon> 
                        </Button>
                    </Grid>
                </Grid>
            </Paper> 
        </div>
    )
}

export default ListItem
