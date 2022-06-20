import React from 'react'
import { Grid, Button, Drawer, TextField } from '@material-ui/core'; 
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendIcon from '@material-ui/icons/Send';

const Chatroom = () => {
  
    const [openDrawer, setOpenDrawer] = React.useState(false)

    const sendMessage = () => {
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/globalchatroom/messages", {
            method: "POST",
            headers:  {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messageText: "hiii",
                senderUuid: "test4"
            })

        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                debugger
            }
        })
    }

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
                    <Button onClick={sendMessage}>
                        <SendIcon relative/>
                    </Button>
                </Grid>
            </Drawer>
        </div>
    )
}

export default Chatroom