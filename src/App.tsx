import './App.css'
import Home from './pages/Dashboard/Dashboard'
import Header from './components/Header/header'
import { Outlet } from 'react-router-dom'
function App() {
window.onstorage = (event) => {
  console.log('event')
  console.log(event)
}

  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </>
  )
}

export default App
