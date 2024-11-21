import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4'>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold'>RepApps</h1>
      </Link>
    </nav>
  )
}

export default Header