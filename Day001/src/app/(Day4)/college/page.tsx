import React from 'react'
import { colleges } from '@/app/db/Data'
import Link from 'next/link'
const page = () => {

  return (
    <div  className= 'grid grid-cols-2 h-screen w-screen p-3 gap-10'>
        {colleges.map((college)=>(
          <Link
          href={`/college/${college.id}`}
          key={college.id}
          className='bg-gray-200 p-4 rounded-lg font-bold text-xl'>
            
              <div>
              
              <h1><img src={college.image} alt="" className='w-[400px] h-[400px] object-cover' /></h1>
                <h1>{college.name}</h1>
                <p>{college.location}</p>
                <p>{college.description}</p>
             
            </div>
            </Link>
        ))}

    </div>
  )
}

export default page