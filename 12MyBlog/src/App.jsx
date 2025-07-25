import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index'

function App() {
  // eslint-disable-next-line no-unused-vars
  const  [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))

  },[])

  return !loading?(
    <div className='bg-gray-400 h-screen w-screen'>
    <Header/>
    <main>
      {/* <Outlet/> */}
    </main>
    <Footer/>
    </div>
    
  ):null
}

export default App
