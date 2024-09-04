import React from 'react'

const Footer = () => {
  return (
    <main className='flex flex-col items-center p-4 bg-slate-800 text-white'>
        <ul className='flex gap-4 items-center'>
            <li className='cursor-pointer hover:underline'>Home</li>
            <li className='cursor-pointer hover:underline'>About</li>
            <li className='cursor-pointer hover:underline'>Contact</li>
        </ul>
        <p className='text-slate-400 text-sm'>&copy; Company Name. All rights reserved.</p>
    </main>
  )
}

export default Footer