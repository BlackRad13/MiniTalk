import * as React from 'react';
import {ChangeEvent, memo, useCallback, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import {FormControl, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {SendMessage} from "../../../models/ChatDTO";

interface Props {
  handleSendMessage: SendMessage
}

export const ChatInput = memo(({handleSendMessage}: Props) => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }, []);

  const handleClick = useCallback(() => {
    handleSendMessage(message);
    setMessage('')
  }, [message]);

  const isEnterDown = useCallback((event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      handleClick()
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', isEnterDown)
    return (): void => document.removeEventListener('keydown', isEnterDown)
  }, [])

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', height: 'auto', width: '73%', m: '16px 30px '}}>
      <FormControl sx={{width: '40%', height: '100%'}} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
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
    </Box>

  );
})

ChatInput.displayName = 'ChatInput'
