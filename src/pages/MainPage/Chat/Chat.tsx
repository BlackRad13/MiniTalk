import {memo, useState} from "react";
import {ChatInput} from "./ChatInput";
import {SendMessage} from "../../../models/ChatDTO";
import {ChatHistory} from "./ChatHistory";

export const Chat = memo(() => {

  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || '[]'))
  const handleSendMessage: SendMessage = (message: string): void => {
    message && localStorage.setItem('history', JSON.stringify([...history, message]))
    setHistory([...history, message])
  }

  return (
    <div style={{width: '80%', height: '80%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', background: "red"}}>
      <ChatHistory history={history}/>
      <ChatInput handleSendMessage={handleSendMessage}/>
    </div>
  )
})