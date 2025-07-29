import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //     if (userData) {
  //       dispatch(login({userData}))
  //     } else {
  //       dispatch(logout())
  //     }
  //   })
  //   .finally(() => setLoading(false))
  // }, [])
  useEffect(() => {
    console.log("App.jsx: Checking current user...");
    authService.getCurrentUser()
    .then((userData) => {
        console.log("App.jsx: Got user data:", userData);
        if (userData) {
            dispatch(login({userData}))
        } else {
            console.log("App.jsx: No user data, logging out");
            dispatch(logout())
        }
    })
    .catch((error) => {
        console.error("App.jsx: Error getting user:", error);
    })
    .finally(() => setLoading(false))
}, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App