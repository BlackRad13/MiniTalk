import {Box, Container, styled, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import * as React from "react";

interface Props {
  history: string[],
}

const UserMessageBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  maxWidth: '50vw',
  minWidth: '5vw',
  minHeight: '4.2vh',
  background: 'green',
  wordBreak: 'break-all',
  padding: 8,
  marginTop: 24,
  overflow: 'hidden',
}))

const BotMessageBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  alignSelf: 'flex-start',
  maxWidth: '50vw',
  minWidth: '5vw',
  minHeight: '4.2vh',
  background: 'blue',
  wordBreak: 'break-all',
  padding: 8,
  marginTop: 24,
  overflow: 'hidden',
}))

const HistoryContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  minWidth: '60vw',
  maxWidth: '60vw',
  minHeight: 300,
  maxHeight: '60vh',
  height: '100vh',
  overflow: 'auto',
}))

export const ChatHistory = ({history}: Props) => {

  return (
    <HistoryContainer>
      {history.map((message: string, index: number) =>
        index % 2 == 1 ?
        <BotMessageBox>
          <AccountCircle/>
          <Typography sx={{marginLeft: 1}}>
            {message}
          </Typography>
      </BotMessageBox>
      :
          <UserMessageBox>
            <Typography sx={{marginRight: 1}}>
              {message}
            </Typography>
            <AccountCircle/>
          </UserMessageBox>
      )}
    </HistoryContainer>
  )
}