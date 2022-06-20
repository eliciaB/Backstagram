import React, { useState } from 'react'
import { Grid, Button, Drawer, TextField } from '@material-ui/core'; 
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendIcon from '@material-ui/icons/Send';
import ChatMessage from './ChatMessage';

const Chatroom = () => {
  
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [chatMessageList, setChatMessageList] = React.useState([
        {
            messageText: "merry christmas",
            uuid: "f62e5899-2b6a-4c7c-af86-0d29975682fd",
            senderUuid: "test4",
            timestamp: "1655248477"
        },
        {
            messageText: "hiii",
            uuid: "0cf8506c-9e5a-4a5f-81c2-57792540284e",
            senderUuid: "test4",
            timestamp: "1655248568"
        },
        {
            uuid: "b696f18b-0990-4416-88b2-19f62e8e6c02",
            messageText: "hiii",
            senderUuid: "test4",
            timestamp: "1655248809"
        }
    ])

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
                <div className = "MessagesContainer">
                    <Grid container alignItems="center" direction="column"  justify="flex-start" spacing={3}>
                        {
                            chatMessageList.map(
                                (chatMessage)=>{   
                                    return (
                                        <Grid item>
                                            <ChatMessage chatMessage={chatMessage}/>
                                        </Grid>
                                    ) 
                                }
                            )
                        }
                    </Grid>
                </div>
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