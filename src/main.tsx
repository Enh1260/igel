import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes'
import {
  RouterProvider
} from 'react-router-dom'
/*
import Home from './pages/Home/Home.tsx'
import App from './App.tsx'*/
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
