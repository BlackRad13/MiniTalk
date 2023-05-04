import * as React from 'react';
import {ChangeEvent, memo, useCallback, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import {Container, FormControl, IconButton, Input, InputAdornment, styled} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import {HistoryFunction, MessageFunction} from "../../../models/ChatDTO";

interface Props {
  handleSendMessage: MessageFunction,
  handleReset: () => void,
  changeHistory: HistoryFunction,
}

const InputContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  height: 'auto',
  width: '60%',
}))

export const ChatInput = memo(({handleSendMessage, handleReset, changeHistory}: Props) => {
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

  return (
    <InputContainer disableGutters>
      <FormControl sx={{width: '95%', height: '95%', marginBottom: 2, marginTop: 2}} variant="outlined">
        <Input
          id="message-input"
          placeholder={'Введите ваш запрос...'}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          }
          endAdornment={
            <>
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClick}
                  edge="end"
                  disableRipple
                >
                  <SendIcon/>
                </IconButton>
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton
                  onClick={handleReset}
                  edge="end"
                  disableRipple
                >
                  <RotateLeftIcon/>
                </IconButton>
              </InputAdornment>
            </>
          }
          value={message}
          onChange={handleChangeMessage}
        />
      </FormControl>
    </InputContainer>

  );
})

ChatInput.displayName = 'ChatInput'
