import React from 'react'

const ChatMessage = (props) => {
  return (
    <div>{props.chatMessage.messageText}</div>
  )
}

export default ChatMessage