import React from 'react'
import logo from './yfiles-logo.svg'
import './App.css'
import ReactGraphComponent from './ReactGraphComponent.js'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>A Basic yFiles Integration in React</h1>
      </header>
      <ReactGraphComponent />
    </div>
  )
}

export default App
