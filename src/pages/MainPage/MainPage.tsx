import {memo} from "react";
import {Container, styled} from "@mui/material";
import {Chat} from "./Chat/Chat";
import {MainBackgroundParticles} from "../../components/MainBackgroundParticles";

const CenterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 100vh;
  overflow: hidden;
  ::-webkit-scrollbar{
  width:0;
}
`

export const MainPage = memo(() => {

  return (
    <CenterContainer>
      <Chat/>
      <MainBackgroundParticles fullScreen/>
    </CenterContainer>
  )
})

MainPage.displayName = 'MainPage'