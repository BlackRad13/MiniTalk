import {Box, Container, styled, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import * as React from "react";
import {ArchivedMessage} from "../../../models/ChatDTO";

interface Props {
  history: ArchivedMessage[],
}

const UserMessageBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  maxWidth: '50%',
  minWidth: '5%',
  height: 'auto',
  background: 'green',
  wordBreak: 'break-all',
  padding: 8,
  marginTop: 24,
}))

const BotMessageBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  alignSelf: 'flex-start',
  maxWidth: '50%',
  minWidth: '5%',
  background: 'grey',
  wordBreak: 'break-all',
  padding: 8,
  marginTop: 24,
}))

const HistoryContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  minWidth: '90%',
  maxWidth: '90%',
  height: '60%',
  overflow: 'auto'
}))

export const ChatHistory = ({history}: Props) => {

  return (
    <HistoryContainer>
      {history.map((archivedMessage: ArchivedMessage) =>
        archivedMessage.from == 'bot' ?
        <BotMessageBox>
          <AccountCircle/>
          <Typography sx={{marginLeft: 1}}>
            {archivedMessage.message}
          </Typography>
      </BotMessageBox>
      : archivedMessage.from == 'user' &&
          <UserMessageBox>
            <Typography sx={{marginRight: 1}}>
              {archivedMessage.message}
            </Typography>
            <AccountCircle/>
          </UserMessageBox>
      )}
    </HistoryContainer>
  )
}