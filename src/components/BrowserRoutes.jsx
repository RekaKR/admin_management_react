import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "../routes/RootRoute"
import ErrorPage from "./ErrorPage"
import TasksPage from '../pages/TasksPage'
import DivisionsPage from '../pages/DivisionsPage'
import ColleaguesPage from '../pages/ColleaguesPage'
import NewColleaugePage from "../pages/NewColleaugePage"
import UsersPage from '../pages/UsersPage'
import AddressesPage from '../pages/AddressesPage'
import RoutesPage from '../pages/RoutesPage'
import LogisticsPage from '../pages/LogisticsPage'
import SettingsPage from '../pages/SettingsPage'

const BrowserRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <TasksPage />
        },
        {
          path: "tasks",
          element: <TasksPage />
        },
        {
          path: "divisions",
          element: <DivisionsPage />
        },
        {
          path: "colleagues",
          element: <ColleaguesPage />
        },
        {
          path: "new-colleague",
          element: <NewColleaugePage />
        },
        {
          path: "users",
          element: <UsersPage />
        },
        {
          path: "addresses",
          element: <AddressesPage />
        },
        {
          path: "routes",
          element: <RoutesPage />
        },
        {
          path: "logistics",
          element: <LogisticsPage />
        },
        {
          path: "settings",
          element: <SettingsPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default BrowserRoutes
