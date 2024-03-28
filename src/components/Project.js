import React, { useState } from 'react'
import astrid from "../assets/astridsalon.jpg"
import nick from "../assets/nicktech.jpg"
import mcgan from "../assets/mcgan.jpeg"
import oleemall from "../assets/oleeamll.jpg"
import fitness from "../assets/wikfitness.jpg"
import theprint from "../assets/theprint.jpeg"




const Project = () => {
const[project, setProject]=useState();
  const data=[{
  id:1,
  image:astrid,
  title:"Salon website",
  urlsL:"https://astridsalon.in/"

 },
 {
  id:2,
  image:nick,
  title:"IT Comapny Portfolio",
  urlsL:"https://nicktechsolution.com/"

 },
 {
  id:3,
  image:oleemall,
  title:"E-commerce Website",
  urlsL:"https://oleemall.in/"
  
 },
 {
  id:4,
  image:fitness,
  title:"Fitness Website",
  urlsL:"https://fitness.wiktrip.in/"
 
 },
 {
  id:5,
  image:mcgan,
  title:"LawFirm Website",
  urlsL:"https://mcganlawfirm.in/"
  
 },
 {
  id:6,
  image:theprint,
  title:"PrintHouse Website",
  urlsL:"https://theprint.house/"
  
 }
  ];

  return (
    <div className='grid md:gap-x-8 gap:x-4 md:gap-y-4 gap-y-2 md:grid-cols-3 grid-cols-2 p-4'>
      {
        data.map((e,i)=>{
          return(
          
         <a href={e.urlsL}><div key={i} className='p-2 bg-gray-800 text-white  m-3 rounded-lg shadow-xl
           shadow-gray-500 transition-shadow hover:translate-y-5 hover:bg-black duration-200 cursor-pointer'>
          <img src={e.image}/>
          <h1 className='md:text-xl text-sm font-bold text-orange-500 mt-2'>{e.title}</h1>
          <h1>{e.description}</h1>
          {/* <div></div> */}
          {/* <h1 className='bg-orange-500 inline-block w-10 h-10 text-center rounded-full p-2 absolute -top-10 -z-10'> {e.id}</h1> */}
          </div>
          </a>
         
          )
        })
        
    }
    </div>
  )
}

export default Project