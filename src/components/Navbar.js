import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid justify-self-stretch  p-6  bg-white'>
      <a href={'/'} className=' justify-self-start flex flex-row ml-6  hover:p-3 hover:text-blue-600 text-3xl lg:text-4xl font-bold '><svg xmlns="http://www.w3.org/2000/svg" style={{
    height:"35px",
    width: "30px"
    }} viewBox="0 0 512 512"><path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>IdeaFlow</a>
      <div className=' justify-self-center'>
         <div className='hidden  lg:flex flex-row' style={{marginTop:"-20px" }}>
          
       <Link to="/ideas">    <li className='mx-4 hover:p-3 hover:text-blue-600 list-none font-bold'>Ideas</li></Link> 
            <li className='mx-4 hover:p-3 hover:text-blue-600  list-none font-bold'>Solutions</li>
            <li className='mx-4 hover:p-3 hover:text-blue-600 list-none font-bold'>Problems</li>
           
             </div>
      </div>
      <div className='flex flex-col lg:hidden absolute top-0 left-0 bg-white shadow-sm' style={{height:'100vh',display:'none'}}>
     
          
      <li className='mx-4 hover:p-3 hover:text-blue-600 list-none font-bold'>Ideas</li>
            <li className='mx-4 hover:p-3 hover:text-blue-600  list-none font-bold'>Solutions</li>
            <li className='mx-4 hover:p-3 hover:text-blue-600 list-none font-bold'>Problems</li>
          
      </div>
    </div>
  )
}

export default Navbar
