// import React from 'react'

// const page = ({params}: {params:{id:string}}) => {
//     const id = params.id
//   return (
//     <div className='h-screen w-screen bg-red-400 flex items-center justify-center font-bold text-2xl flex-col'>we are using dynamic routing so there is no errors , when you search aur enter anything in the url
    
// <div className='mt-10 text-4xl'> you enter : {id}</div>
   
//     </div>
//   )
// }

// export default page
import { colleges } from '@/app/db/Data'
import React from 'react'

const page = ({params} : {params:{id:string}}) => {
    const {id}= params
    const college = colleges.find((college)=>college.id===Number(id))

  return (
    
    <div className='h-screen w-screen flex items-center justify-center font-bold text-2xl flex-col bg-gradient-to-b from-blue-500 to-violet-500 p-7'>
        <div className='flex flex-col gap-2  p-4 rounded-lg'>
      <p>{college?.name}</p>
       <p>{college?.location}</p>
       <p>{college?.description}</p>
       
        </div>
        <img src={college?.image} alt="" className='w-[400px] h-[400px] object-cover' />
    </div>
  )
}

export default page