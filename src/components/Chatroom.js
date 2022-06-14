import React from 'react'
import { Grid, Button, Drawer, TextField } from '@material-ui/core'; 
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendIcon from '@material-ui/icons/Send';

const Chatroom = () => {
  
    const [openDrawer, setOpenDrawer] = React.useState(false)

    return (
        <div>  
            <Button onClick = {()=>setOpenDrawer(true)} className = "MessagingIcon">
                <ChatBubbleOutlineRoundedIcon fontSize='large'/>
            </Button>
            <Drawer anchor = "right" 
                open = {openDrawer}     
                onClose = {()=> setOpenDrawer(false)}
            >
                <div className = "MessagesContainer"></div>
                <Grid container direction = "row" justify = "flex-end" alignItems = "center">
                    <TextField/>
                    <SendIcon relative/>
                </Grid>
            </Drawer>
        </div>
    )
}

export default Chatroom