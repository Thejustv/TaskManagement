import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Header from './components/Header.jsx';
import ErrorPage from './ErrorPage.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx';


const router=createBrowserRouter([
    {
      path :"/",
      element:<><Login /></>,
      errorElement: <ErrorPage />
    },
    {
      path :"/home",
      element:<><Header/><Home/></>,
      errorElement: <ErrorPage />
    },
    {
      path:'/signup',
      element:<><SignUp /></>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/profile',
      element:<><Header/><Profile /></>,
      errorElement:<ErrorPage/>
    },

]);


const App=()=>{

    return (
        <RouterProvider router={router} />
    )
}



export default App;
