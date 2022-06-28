import React, { useState } from 'react'
import { Grid, Button, Drawer, TextField } from '@material-ui/core'; 
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendIcon from '@material-ui/icons/Send';
import ChatMessage from './ChatMessage';

const Chatroom = () => {
  
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const [chatMessageList, setChatMessageList] = React.useState([])
    const [newChatMessage, setNewChatMessage] = React.useState()

    React.useEffect(() => {
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/globalchatroom/messages", {
            method: "GET",
            headers:  {
                "Content-Type": "application/json"
            }

        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                const chatData = JSON.parse(responsejson.body)
                setChatMessageList(chatData)
            }
        })
    }, [])

    const sendMessage = () => {
        fetch("https://id54gv4pxf.execute-api.us-east-2.amazonaws.com/v1/globalchatroom/messages", {
            method: "POST",
            headers:  {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messageText: newChatMessage,
                senderUuid: "test4"
            })

        }).then(response => response.json()).then(responsejson => {
            if (responsejson.statusCode === 200) {
                const chatData = JSON.parse(responsejson.body)
                setChatMessageList(chatData)
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
                    <TextField
                        onChange = {
                            (event) => {
                                setNewChatMessage(event.target.value)
                            }
                        }
                    />
                    <Button onClick={sendMessage}>
                        <SendIcon relative/>
                    </Button>
                </Grid>
            </Drawer>
        </div>
    )
}

export default Chatroom