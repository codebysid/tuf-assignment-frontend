import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AddCodeSnippet from './components/AddCodeSnippet.tsx'
import './index.css'
import DisplaySubmissions from './components/DisplaySubmissions.tsx'
import Navbar from './components/Navbar.tsx'

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <AddCodeSnippet />
      },
      {
        path: "/submissions",
        element: <DisplaySubmissions />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
