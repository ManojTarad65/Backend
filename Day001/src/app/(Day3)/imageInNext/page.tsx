import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Image src="/nature.png" alt="nature" width={500} height={500}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true}/>
    </div>
  )
}

export default page


// concept 1
// 1. image in next js is used to optimize the image
// 2. image in next js is used to load the image on demand
// Next.js provides a built-in Image component (next/image) which offers automatic 
// image optimization, lazy loading, responsive resizing, and better performance compared to using standard <img> tags.
