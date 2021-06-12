import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Feed from './Components/Feed/Feed'
import Login from './Components/Login/Login'
import { useStateValue } from './StateProvider'

function App () {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? ( <Login /> ) : (
        <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
          </div>
        </>
      )}
    </div>
  )
}

export default App
