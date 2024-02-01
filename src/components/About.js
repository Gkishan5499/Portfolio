import React, { useState } from 'react'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CloudIcon from '@mui/icons-material/Cloud';

const About = () => {
  const[resume, setResume]=useState("Hello");
  const myservice=[
    {
       icon:<IntegrationInstructionsIcon/> ,
       service:"Web Development",
       description:"Creating a compelling web development portfolio is essential to showcase your skills and attract potential clients or employers.",
       button:"Read More",
    },
    {
        icon:<ImportantDevicesIcon/>  ,
        service:"Frontend Developer",
        description:"Creating a compelling web development portfolio is essential to showcase your skills and attract potential clients or employers.",
        button:"Read More",
     },
     {
        icon:<CloudIcon/>  ,
        service:"Wordpress Development",
        description:"Creating a compelling web development portfolio is essential to showcase your skills and attract potential clients or employers.",
        button:"Read More",
     }
  ]

  const expert= ['HTML','CSS','JavaScript','ReactJs', 'Angular','Wordpress','PHP','Java','SEO','MySql'];


  const showResume=()=>{
    setResume();
  }

  const [data, setData] = useState({
    subtitle: "About me",
    title: "Web Developer & Website Developer",
    descrip: "I use animation as a third dimension by which to simplify experiences and kuiding throw each and every interaction.I’m not adding motion just to spruce things up, but doing it in ways that."
  })


  return (
    <> 

 
      <div className='flex justify-center p-5'>
      <h1 className='text-2xl font-bold text-orange-500'>My Services</h1>
      </div>
    <div className='md:flex justify-between items-center p-4  '>
     {
       myservice.map((e,i)=>{
       return (
           <div key={i} className='md:w-1/3 bg-gray-500 border hover:bg-gray-800  border-gray-600 text-gray-50 p-4 shadow-xl
            h-72 md:h-60 md:m-2 mt-2 w-full transition hover:translate-y-2 duration-500 '>
             <h2>{e.icon}</h2>
             <h1 className='text-2xl font-semibold mt-2'>{e.service}</h1>
             <h3>{e.description}</h3><br/>
             <button className='bg-orange-500 text-white p-2 md:mt-2'>{e.button}</button>


           </div>
       )
       })
  
   
    }
    </div>



      <div className='flex justify-center p-5'>
      <h1 className='text-2xl font-bold text-orange-500'>My Experties</h1>
      </div>
      <div className='md:flex md:justify-between item-center p-5'>
      <div className='md:w-1/2 md:h-72  md:p-10'>
      <h1 className='text-2xl text-white font-bold'>I Love these Technologies </h1>
      <p className='md:text-lg text-sm text-gray-100'>Embracing the world of technology is a thrilling journey, and my passion revolves around a dynamic mix of HTML, CSS, React, WordPress, and NodeJS. These versatile tools allow me to craft captivating websites and applications, turning ideas into interactive digital experiences.</p>
      <br />
      <button className='bg-orange-500 p-3 mb-3'>Read More</button>
      </div>

      <div className='md:w-1/2 p-3 h-72 border border-gray-600 flex  justify-center flex-wrap items-center'>
      {
        expert.map((e,i)=>{
       return (
          <div key={i} className='p-2 '>
           <p className='bg-gray-400 space-y-0 p-2 transition hover:translate-x-3 duration-200'>{e}</p> 
          </div>
       )
        })
      }
      
     </div>
    </div>
 

    </>
  )
}

export default About