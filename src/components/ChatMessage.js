import { Avatar, Grid, Paper } from '@material-ui/core'
import React from 'react'

const ChatMessage = (props) => {
  return (
    <div>
      <Grid container direction = "row" justifyContent='flex-start' alignContent='flex-start'>
        <Grid item>
          <Avatar className = "AvatarStyle">
            eb
          </Avatar>
        </Grid>
        <Grid container xs item direction='column' justifyContent='flex-start'>
          <div className='ChatMessageTitle'>
            Elicia Back
          </div>
          <Paper className='ChatMessageDesign'>
            {props.chatMessage.messageText}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default ChatMessage