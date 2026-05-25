import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-[#050b18] text-white overflow-x-hidden">
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-50 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[74px] sm:ml-[260px] flex flex-col min-h-screen w-full">
        
        <main className="flex-1 px-4 sm:px-6 lg:px-7 py-4 sm:py-6 lg:py-7 overflow-hidden">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}