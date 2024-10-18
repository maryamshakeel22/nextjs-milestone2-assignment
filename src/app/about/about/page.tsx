import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='items-center justify-center text-center'>
      <h1 className='text-center text-green-800 text-2xl'>Nested About</h1>
      <br />
      <Link href="/about" className="text-violet-900 text-2xl items-center justify-center">Go About Page</Link>
    </div>
  )
}

export default About