import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Icons = () => {
  return (
    <div className='icons md:space-x-5 mt-5'>
       <a href='https://www.linkedin.com/in/kishan-kumar-gautam-4700751a5/'><div className='bg-gray-900 p-2 shadow-2xl rounded-md shadow-slate-700 inline-block mt-3 cursor-pointer  transition ease-in-out hover:translate-y-1 duration-300'>
        <LinkedInIcon sx={{fontSize:40, color:'white' }} />
       </div></a>
       <a href='https://www.facebook.com/kishangautam0?mibextid=ZbWKwL'><div className='bg-gray-900 p-2 shadow-2xl rounded-md shadow-slate-700 inline-block mt-3 cursor-pointer  transition ease-in-out hover:translate-y-1 duration-300'>
        <FacebookIcon sx={{fontSize:40, color:'white' }} />
       </div></a>
       
       <a href='https://www.instagram.com/kisgautam?igsh=dW44ODg4YjltamZu'><div className='bg-gray-900 p-2 shadow-2xl rounded-md shadow-slate-700 inline-block mt-3 cursor-pointer transition ease-in-out hover:translate-y-1 duration-300 '>
        <InstagramIcon sx={{fontSize:40, color:'white' }} />
       </div></a>
       
       <a href='https://github.com/Gkishan5499'><div className='bg-gray-900 p-2 shadow-2xl rounded-md shadow-slate-700 inline-block mt-3 cursor-pointer transition ease-in-out hover:translate-y-1 duration-300 '>
        <GitHubIcon sx={{fontSize:40, color:'white' }} />
       </div></a>
    </div>
  )
}

export default Icons