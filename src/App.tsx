import React, {memo, useEffect} from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";

export const App = memo(() => {


  useEffect(() => {
    const uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'
    localStorage.setItem('uuid', uuid)
    const cuid = localStorage.getItem('cuid' || '')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cuid ? {uuid: uuid, cuid: cuid} : {uuid: uuid})
    };
    fetch('https://biz.nanosemantics.ru/api/2.1/json/Chat.init', requestOptions)
      .then(response => response.json())
      .then(data => cuid!==data.result.cuid && localStorage.setItem('cuid', data.result.cuid));
  }, []);

  return (
    <MainPage/>
  )
})

App.displayName = 'App'
