import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs.jsx';
import AppliedJobs from './pages/AppliedJobs.jsx';
import Home from './pages/Home.jsx';
const router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
