import * as React from 'react';
import {ChangeEvent, memo, useCallback, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {Container, FormControl, IconButton, Input, InputAdornment, styled} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {HistoryFunction, MessageFunction} from "../../../models/ChatDTO";

interface Props {
  handleSendMessage: MessageFunction,
  changeHistory: HistoryFunction
}

const InputContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  height: 'auto',
  width: '100%',
}))

export const ChatInput = memo(({handleSendMessage, changeHistory}: Props) => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }, []);

  const handleClick = useCallback(() => {
    if (message.trim() !== '') {
      changeHistory(message, 'user');
      handleSendMessage(message);
    }
    setMessage('')
  }, [message]);

  // const isEnterDown = useCallback((event: KeyboardEvent) => {
  //   if (event.key == 'Enter') {
  //     event.preventDefault()
  //     handleClick()
  //   }
  // }, []);
  //
  // useEffect(() => {
  //   document.addEventListener('keydown', isEnterDown)
  //   return (): void => document.removeEventListener('keydown', isEnterDown)
  // }, [])

  return (
    <InputContainer disableGutters>
      <FormControl sx={{width: '1000%', height: '100%', marginBottom:2, marginTop:2}} variant="outlined">
        <Input
          placeholder={'Введите ваш запрос...'}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClick}
                edge="end"
              >
                <SendIcon/>
              </IconButton>
            </InputAdornment>
          }
          value={message}
          onChange={handleChangeMessage}
        />
      </FormControl>
    </InputContainer>

  );
})

ChatInput.displayName = 'ChatInput'
