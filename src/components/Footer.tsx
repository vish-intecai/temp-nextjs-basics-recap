"use client"
import { usePathname,  } from 'next/navigation'


export default function Footer() {
  const pathname = usePathname()
  return (
    <div>Footer


      <div>
        Pathname 
      </div>
      <div>
        {pathname}
      </div>
    </div>
  )
}
