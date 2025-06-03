"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AddProducts = () => {
  const router = useRouter()
const handleClick = () => {
    router.push('/redirect/login')
}
  return (
    <div className='h-screen flex  flex-col items-center justify-center bg-amber-300 font-bold text-2xl'>

      <h1 className='text-2xl font-bold mb-5'> Products</h1>
     <div>
      <Image src="/nature.png" alt="nature" width={450} height={500} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
     </div>
      <form action="" className='flex flex-col gap-2 p-2 rounded-lg'>
        <h1>Nature </h1>
      <h1>Photography </h1>
        <button onClick={handleClick} type="submit" className='p-2 rounded-lg bg-black text-white cursor-pointer'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts