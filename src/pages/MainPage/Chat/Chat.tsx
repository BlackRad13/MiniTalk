import {memo, useCallback, useEffect, useState} from "react";
import {ChatInput} from "./ChatInput";
import {HistoryFunction, MessageFunction, SnackbarDTO} from "../../../models/ChatDTO";
import {ChatHistory} from "./ChatHistory";
import {setInit, setReady} from "../../../api/ChatApi/ChatReadyApi";
import {CircularProgress, Container, debounce, Snackbar, styled} from "@mui/material";
import {denim} from "../../../styles/colors/denim";
import {allports} from "../../../styles/colors/allports";

const ChatContainer = styled(Container)`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background: radial-gradient(at 50% 100%,${allports[300]}, ${denim[900]});
  border-radius: 25px;
  overflow: hidden;
  ::-webkit-scrollbar{
  width:0;
`

const initialSnackbarState: SnackbarDTO = {
  open: false,
  message: '',
  status: 'success',
}

export const Chat = memo(() => {

  const [snackbar, setSnackbar] = useState(initialSnackbarState)
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history') || '[]'))
  const [isLoading, setIsLoading] = useState(false)

  const changeHistory: HistoryFunction = (message: string, from: 'bot' | 'user'): void => {
    const newHistory = [...JSON.parse(localStorage.getItem('history') || '[]'), {message: message, from: from}]
    localStorage.setItem('history', JSON.stringify(newHistory))
    setHistory(newHistory)
  }
  const resetHistory = (): void => {
    setHistory([])
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

  const handleReset = useCallback(() => {
    localStorage.removeItem('history')
    localStorage.removeItem('cuid')
    localStorage.removeItem('uuid')
    resetHistory()
    setIsLoading(false)
    getItems()
  }, []);

  const handleCloseSnackbar = () => setSnackbar({...snackbar, open: false})

  const getItems = debounce(() => {
    if (!isLoading) {
      const uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'
      const cuid = localStorage.getItem('cuid' || '') ?? ''
      localStorage.setItem('uuid', uuid)
      setInit(cuid, uuid)
        .then(data => {
            localStorage.setItem('cuid', data.result.cuid)
            return data
          }
        )
        .then(data => setReady(data.result.cuid))
        .then(data => {
          !history.length && changeHistory(data.result.text.value, 'bot');
          setIsLoading(true)
        })
        .then(() =>
          setSnackbar({open: true, message: 'Подключение прошло успешно', status: 'success'}))
        .catch(() =>
          setSnackbar({open: true, message: 'Что то пошло не так, попробуйте зайти позже', status: 'error'})
        )
    }
  }, 1000)

  useEffect(() =>
      getItems()
    , []);

  return (
    <ChatContainer>
      {isLoading
        ?
        <>
          <ChatHistory history={history}/>
          <ChatInput handleSendMessage={handleSendMessage} handleReset={handleReset} changeHistory={changeHistory}/>
        </>
        : <CircularProgress sx={{alignSelf: 'center', position: 'absolute', top: '50vh', color: denim[900]}}/>
      }
      <Snackbar {...snackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}/>
    </ChatContainer>
  )
})