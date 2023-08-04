import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SideBar from '../SideBar'

const RootRoute = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
}

export default RootRoute