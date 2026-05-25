import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-[#050b18] text-white">
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-65 flex flex-col min-h-screen">
        
        <main className="flex-1 px-7 py-7">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}