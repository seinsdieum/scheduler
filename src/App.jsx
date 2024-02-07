import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<BaseLayout/>}>
          <Route index element={<Schedule/>}>

          </Route>
          <Route path={'local'}>
            <Route index></Route>
            <Route path={'create'}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
