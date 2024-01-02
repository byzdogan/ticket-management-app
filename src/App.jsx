import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet
} from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import TicketCreate from './pages/TicketCreate'
import TicketSuccess from './pages/TicketSuccess'
import NavBar from './components/NavBar'
import AdminMenu from './components/AdminMenu'
import TicketQuery from './pages/TicketQuery'
import Error404 from './routes/Error404'
import UserTicketDetails from './pages/UserTicketDetails'
import PrivateRoute from './routes/PrivateRoute'
import AdminDashboard from './pages/AdminDashboard'
import AdminTicketDetails from './pages/AdminTicketDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/basvuru-olustur" />,
    errorElement: <Error404/>
  },
  {
    path: '/basvuru-olustur',
    element: <><NavBar /><TicketCreate /></>,
    errorElement: <Error404/>
  },
  {
    path: '/basvuru-basarili',
    element: <><NavBar/><TicketSuccess/></>,
    errorElement: <Error404/>
  },
  {
    path: '/basvuru-sorgula',
    element: <><NavBar/><TicketQuery/></>,
    errorElement: <Error404/>
  },
  {
    path: '/basvuru/:ticketID',
    element: <><NavBar/><UserTicketDetails/></>,
    errorElement: <Error404/>
  },
  {
    path: '/admin',
    element: <Outlet />,
    errorElement: <Error404/>,
    children: [
      {
        path: '/admin',
        element: <><NavBar/><Admin /></>
      },
      {
        path: '/admin/basvuru-listesi',
        element: <PrivateRoute><AdminMenu /><AdminDashboard /></PrivateRoute>
      },
      {
        path: '/admin/basvuru/:ticketID',
        element: <PrivateRoute><AdminMenu/><AdminTicketDetails/></PrivateRoute>
      }
    ]
  }
])

function App () {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
