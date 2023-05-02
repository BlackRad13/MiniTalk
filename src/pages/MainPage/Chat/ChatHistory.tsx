import {Box, Container, styled} from "@mui/material";

interface Props {
  history: string[],
}

const MessageBox = styled(Box)(() => ({
  maxWidth: '50vw',
  minWidth: '5vw',
  minHeight: '4.2vh',
  background: 'green',
  wordBreak: 'break-all',
  padding: 8,
  marginTop: 24,
  overflow:'hidden',
}))

const HistoryContainer = styled(Container)(()=>({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent:'center',
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
      {history.map((message: string)=><MessageBox>{message}</MessageBox>)}
      {/*<MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox> <MessageBox>*/}
      {/*  awdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
      {/*</MessageBox>*/}

    </HistoryContainer>
  )
}