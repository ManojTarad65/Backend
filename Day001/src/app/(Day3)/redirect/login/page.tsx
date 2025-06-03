import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex  flex-col items-center justify-center bg-amber-300 font-bold text-2xl'>
        <h1 className='text-2xl font-bold mb-5'>User Login</h1>
        <form action="" className='flex flex-col gap-2 p-2 border border-black rounded-lg'>
            <input type="text" placeholder='username' className='border border-black p-2' />
            <input type="password" placeholder='password' className='border border-black p-2' />
            <button type="submit" className='p-2 rounded-lg bg-black text-white'>Login</button>
        </form>
        </div>
  )
}

export default page