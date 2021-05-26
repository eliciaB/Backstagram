import React from 'react'
import Paper from '@material-ui/core/Paper';

const ListItem = ({name}) => {
    return (
        <div className="ListItemStyle">
            <Paper>
                <div className="ListItemNameContainerStyle">
                    {name}
                </div>
            </Paper> 
        </div>
    )
}

export default ListItem
