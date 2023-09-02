import { createBrowserRouter } from 'react-router-dom'
import ProtectedRouter from './ProtectedRouter.tsx'
import Root from '../pages/Root/Root.tsx'
import Dashboard from '../pages/Dashboard/Dashboard.tsx'
import SignUp from '../pages/Signup'
import SignIn from '../pages/Signin'
import Landing from '../pages/Landing/Landing.tsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          element: <Landing />,
          index: true
        },        
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/signin",
          element: <SignIn />
        },
        {
          path: "/dashboard",
          element: <ProtectedRouter element={<Dashboard />}></ProtectedRouter>,
        },        
      ]
    },

  ])

export { router }
