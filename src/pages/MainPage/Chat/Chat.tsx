import {memo, useState} from "react";
import {ChatInput} from "./ChatInput";
import {SendMessage} from "../../../models/ChatDTO";
import {ChatHistory} from "./ChatHistory";

export const Chat = memo(() => {

  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || '[]'))
  const handleSendMessage: SendMessage = (message: string): void => {
    if (message !== '') {
      localStorage.setItem('history', JSON.stringify([...history, {message: message, from: 'user'}]))
      setHistory([...history, {message: message, from: 'user'}])
    }

  }

  return (
    <div style={{
      width: '40%',
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      background: "pink"
    }}>
      <ChatHistory history={history}/>
      <ChatInput handleSendMessage={handleSendMessage}/>
    </div>
  )
})