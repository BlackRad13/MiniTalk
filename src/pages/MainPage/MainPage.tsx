import {memo} from "react";
import {Container, styled} from "@mui/material";
import {Chat} from "./Chat/Chat";

const CenterContainer = styled(Container)(()=>({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  minWidth: '100vw',
  height: '100vh',
}))

export const MainPage = memo(() => {

  return (
    <CenterContainer>
      <Chat/>
    </CenterContainer>
  )
})

MainPage.displayName = 'MainPage'