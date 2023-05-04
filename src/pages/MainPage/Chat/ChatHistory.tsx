import {Box, Container, styled, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import * as React from "react";
import {ArchivedMessage} from "../../../models/ChatDTO";
import {denim} from "../../../styles/colors/denim";
import {allports} from "../../../styles/colors/allports";

interface Props {
  history: ArchivedMessage[],
}

const UserMessageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 70%;
  min-width: 5%;
  height: auto;
  background: linear-gradient(to left,${denim[700]}, ${allports[500]});
  color: ${denim[100]};
  border-radius: 25px;
  word-break: break-word;
  padding: 8px;
  margin-top: 12px;
`

const BotMessageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-start;
  max-width: 70%;
  min-width: 5%;
  height: auto;
  background: linear-gradient(to left,${allports[500]}, ${denim[700]});
  color: ${denim[100]};
  border-radius: 25px;
  word-break: break-word;
  padding: 8px;
  margin-top: 12px;
`

const HistoryContainer = styled(Container)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  width: 85%;
  max-width: 85%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 12px;
  margin-top: 24px;
  border-radius: 50px;
  ::-webkit-scrollbar{
  width:0;
  }
  
`

export const ChatHistory = ({history}: Props) => {

  return (
    <HistoryContainer>
      {history.map((archivedMessage: ArchivedMessage, index: number) =>
        archivedMessage.from == 'bot' ?
          <BotMessageBox key={index}>
            <AccountCircle/>
            <Typography sx={{marginLeft: 1}}>
              {archivedMessage.message}
            </Typography>
          </BotMessageBox>
          : archivedMessage.from == 'user' &&
          <UserMessageBox key={index}>
            <Typography sx={{marginRight: 1}}>
              {archivedMessage.message}
            </Typography>
            <AccountCircle/>
          </UserMessageBox>
      )}
    </HistoryContainer>
  )
}