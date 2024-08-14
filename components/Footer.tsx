import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-between text-white-800 body-text w-full gap-y-10 px-20 py-10 max-md:flex-col'>
        <p>Copyright @ 2024 Paaje Inc. All right reserve</p>
        <div className='flex gap-x-4'>
            <Link href="/term_of_use">Term of Use</Link>
            <Link href="/privacy_policy">Privacy Policy</Link>
        </div>
    </footer>
  )
}

export default Footer