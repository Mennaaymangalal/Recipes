import React from 'react'

export default function MainLayout() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4">
      <div className="md:col-span-1 px-4 sm:col-span-4 sm:pb-20">
        <NavbarComponent/>       
      </div>
      <div className="md:col-span-3 p-6 sm:col-span-4  bg-gray-100">
          <Outlet/>
       </div>        
      </div>
      <div className="container">
      <Footer/>
      </div>
    </>
  )
}
