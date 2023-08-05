import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./RootRoute"
import ErrorPage from "./ErrorPage"
import TasksPage from '../../pages/TasksPage.tsx'
import DivisionsPage from '../../pages/DivisionsPage.tsx'
import ColleaguesPage from '../../pages/ColleaguesPage'
import NewColleaugePage from "../../pages/NewColleaugePage"
import UsersPage from '../../pages/UsersPage.tsx'
import AddressesPage from '../../pages/AddressesPage.tsx'
import RoutesPage from '../../pages/RoutesPage.tsx'
import LogisticsPage from '../../pages/LogisticsPage.tsx'
import SettingsPage from '../../pages/SettingsPage.tsx'
import ColleagueProfilePage from '../../pages/ColleagueProfilePage'

const BrowserRoutes = ({ colleagues }) => {
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
          path: "/tasks",
          element: <TasksPage />
        },
        {
          path: "/divisions",
          element: <DivisionsPage />
        },
        {
          path: "/colleagues",
          children: [
            {
              index: true,
              element: <ColleaguesPage colleagues={colleagues} />
            },
            {
              path: "new",
              element: <NewColleaugePage />
            },
            {
              path: ":id",
              element: <ColleagueProfilePage colleagues={colleagues} />
            }
          ]
        },
        {
          path: "/users",
          element: <UsersPage />
        },
        {
          path: "/addresses",
          element: <AddressesPage />
        },
        {
          path: "/routes",
          element: <RoutesPage />
        },
        {
          path: "/logistics",
          element: <LogisticsPage />
        },
        {
          path: "/settings",
          element: <SettingsPage />
        },
        {
          path: '/*',
          element: <ErrorPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default BrowserRoutes
