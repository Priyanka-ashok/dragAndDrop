import React from 'react'
import { Sidebar } from './Components/sidebar'
import './App.css'
import { Dashboard } from './Components/dashboard'

function App () {
  return (
    <main className='App'>
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default App
