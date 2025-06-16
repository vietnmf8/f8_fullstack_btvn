import { useState } from 'react'
import './App.css'
// Neu co nhieu component
import {CalcBtn, Test} from "./components";

function App() {

  return (
    <>
      <div className="screen"></div>
      <div className="keyboard">
          <CalcBtn text="1" backgroundColor='#ccc'/>
          <CalcBtn text="2" backgroundColor='red'/>
          <CalcBtn text="3" backgroundColor='brown'/>
          <CalcBtn text="4" backgroundColor='violet'/>
      </div>
    </>
  )
}

export default App
