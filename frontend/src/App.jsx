import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import RouteComponent from "./components/routes"
import './App.css'
import ThemeComponent from './context/ThemeContext';

function App() {

  return (
    <ThemeComponent>
      <BrowserRouter>
        <RouteComponent/>
      </BrowserRouter>
    </ThemeComponent>
  )
}

export default App
