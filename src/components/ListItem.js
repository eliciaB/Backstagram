import React from 'react'
import Paper from '@material-ui/core/Paper';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const ListItem = ({item, deleteListItem, likeFunction}) => {


    return (
        <div className="ListItemStyle">
            <Paper>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item> 
                        <div className="ListItemNameContainerStyle">
                            <Button onClick={()=>likeFunction(item.id)}>
                                <FavoriteOutlinedIcon style={{color: item.liked ? "red" : "black"}}></FavoriteOutlinedIcon>
                            </Button>
                            {item.content}
                        </div>
                    </Grid>
                    <Grid item> 
                        <Button onClick={()=>deleteListItem(item.id)}>
                            <ClearSharpIcon></ClearSharpIcon> 
                        </Button>
                    </Grid>
                </Grid>
               
                        
           
           
           </Paper> 
        </div>

    )
}

export default ListItem
