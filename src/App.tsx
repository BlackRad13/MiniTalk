import React, {memo} from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";

export const App = memo(() => {

  return (
    <MainPage/>
  )
})

App.displayName = 'App'
