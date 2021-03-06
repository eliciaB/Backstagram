import React from 'react'
import Paper from '@material-ui/core/Paper';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

function ListItem(props) {


    return (
        <div className="ListItemStyle">
            <Paper>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item> 
                        <div className="ListItemNameContainerStyle">
                            <Button onClick={()=>props.likeListItem(props.item.id)}>
                                <FavoriteOutlinedIcon style={{color: props.item.liked ? "red" : "black"}}></FavoriteOutlinedIcon>
                            </Button>
                            {props.item.content}
                        </div>
                    </Grid>
                    <Grid item> 
                        <Button onClick={()=>props.deleteListItem(props.item.id)}>
                            <ClearSharpIcon></ClearSharpIcon> 
                        </Button>
                    </Grid>
                </Grid>
               
        
           
           
           </Paper> 
        </div>

    )
}

export default ListItem
