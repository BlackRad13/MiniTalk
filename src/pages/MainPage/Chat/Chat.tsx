import {memo, useEffect, useState} from "react";
import {ChatInput} from "./ChatInput";
import {HistoryFunction, MessageFunction} from "../../../models/ChatDTO";
import {ChatHistory} from "./ChatHistory";

export const Chat = memo(() => {

  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || '[]'))

  const changeHistory: HistoryFunction = (message: string, from: 'bot' | 'user'): void => {
    const newHistory = [...JSON.parse(localStorage.getItem('history') || '[]'), {message: message, from: from}]
    localStorage.setItem('history', JSON.stringify(newHistory) )
    setHistory(newHistory)
  }

  const handleSendMessage: MessageFunction = (message: string): void => {
      const cuid = localStorage.getItem('cuid' || '')
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({cuid: cuid, text: message})
      };
      fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat.request', requestOptions)
        .then(response => response.json())
        .then(data => {
          cuid !== data.result.cuid && localStorage.setItem('cuid', data.result.cuid);
          changeHistory(data.result.text.value, 'bot');
        });
  }

  useEffect(() => {
    const cuid = localStorage.getItem('cuid' || '')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({cuid: cuid, euid: '00b2fcbe-f27f-437b-a0d5-91072d840ed3'})
    };
    fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat.event', requestOptions)
      .then(response => response.json())
      .then(data => changeHistory(data.text.value, 'bot'));
  }, []);

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
      <ChatInput handleSendMessage={handleSendMessage} changeHistory={changeHistory}/>
    </div>
  )
})