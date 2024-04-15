
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
const AdminLayout = () => {
  return (
    <div className='w-full min-h-screen h-screen flex gap-4 p-3'>
    <Sidebar/>
    <Outlet />
    </div>
  )
}

export default AdminLayout
