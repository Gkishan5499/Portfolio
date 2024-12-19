import React, { useState } from 'react'

import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const Header = () => {

  const[logo, setLogo]= useState("Kishan");
  // const[menu , setMenu]= useState(false);
// const[menuicon , setMenuicon]=useState(false);

  
  return (
    <>
     
     
     
     <nav className=' flex justify-between items-center p-4 bg-gray-900 text-orange-500  sticky top-0'>
    {/* {
      setMenuicon?  <MenuIcon  sx={{color:'white', fontSize:30 ,}} onClick={()=>setMenu(true)} />
      :<CloseIcon sx={{color:'white', fontSize:30}} onClick={()=>setMenu(false)} />
    } */}

{/*    
      {
        menu? <div className='w-1/4 text-gray-100 h-screen pl-2 pt-4 flex-col'> 
      <Link to={'/'}><p className='m-2 hover:text-gray-100'>Home</p></Link>  
      <Link to={'/about'}>  <p className='m-2 hover:text-gray-100'>About</p></Link> 
      <Link to={'/project'}> <p className='m-2 hover:text-gray-100'>Project</p></Link> 
      <Link to={'/contact'}> <p className='m-2 hover:text-gray-100'>Contact</p></Link></div>
      :<CloseIcon sx={{color:'white', fontSize:30}} onClick={()=>setMenu(false)} />
      } */}
     <h1 className='text-2xl font-bold p-2'>{logo}<span className='text-gray-200'>Gautam</span> </h1>
     <div className='md:gap-6 md:flex hidden'>


     <Link to={'/'} className='m-2 hover:text-gray-100 '>Home</Link>
     <a href='#about-us' className='m-2 hover:text-gray-100 '>About</a>
     <a href='#project' className='m-2 hover:text-gray-100 '>Projects</a>
     <a href="contact" className='m-2 hover:text-gray-100 '>Contact</a>




      
     
      
      </div> 
     <Link to={"/contact"} ><Button variant="outlined">Hire Me</Button></Link> 
     </nav>
    </>
  )
}

export default Header