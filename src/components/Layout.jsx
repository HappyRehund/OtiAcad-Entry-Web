import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className='min-h-screen bg-base-200'>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout