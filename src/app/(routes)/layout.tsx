import Navbar from '@/components/Navbar'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navbar/>
        <div className='px-8 my-6'>
        {children}
        </div>
      
    </div>
  )
}
