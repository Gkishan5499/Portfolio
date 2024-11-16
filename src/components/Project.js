import React, { useState } from 'react'
import astrid from "../assets/astridsalon.jpg"
import nick from "../assets/nicktech.jpg"
import mcgan from "../assets/mcgan.jpeg"
import oleemall from "../assets/oleeamll.jpg"
import fitness from "../assets/wikfitness.jpg"
import theprint from "../assets/theprint.jpeg"
import arj from "../assets/arj.jpeg"
import academy from "../assets/academy.jpeg"
import miss from "../assets/miss.jpeg"
import dayal from '../assets/dayal.jpeg'
import rmart from '../assets/rmart.jpeg'
import caglaxy from '../assets/caglaxy.jpeg'
import { Link } from 'react-router-dom'



const Project = () => {
  const data = [{
    id: 1,
    image: astrid,
    title: "Salon website",
    urlsL: "https://astridsalon.in/"

  },
  {
    id: 2,
    image: nick,
    title: "IT Comapny Portfolio",
    urlsL: "https://nicktechsolution.com/"

  },
  {
    id: 3,
    image: oleemall,
    title: "E-commerce Website",
    urlsL: "https://oleemall.in/"

  },
  {
    id: 4,
    image: fitness,
    title: "Fitness Website",
    urlsL: "https://fitness.wiktrip.in/"

  },
  {
    id: 5,
    image: mcgan,
    title: "LawFirm Website",
    urlsL: "https://mcganlawfirm.in/"

  },
  {
    id: 6,
    image: theprint,
    title: "PrintHouse Website",
    urlsL: "https://theprint.house/"

  },
  {
    id: 7,
    image: arj,
    title: "ARJ Service Hub",
    urlsL: "https://arjserviceshub.pro/"

  },
  {
    id: 8,
    image: academy,
    title: "Samnic Academy",
    urlsL: "https://samnicacademy.in/"

  },
  {
    id: 9,
    image: miss,
    title: "Miss Universe Arunachal",
    urlsL: "https://missuniversearunachal.com/"

  },
  {
    id: 10,
    image: rmart,
    title: "RMart Super Bazar",
    urlsL: "https://rmartsuperbazar.in/"

  },
  {
    id: 11,
    image: dayal,
    title: "Dayal Car Transport",
    urlsL: "https://dayaltransport.com/"

  },
  {
    id: 12,
    image: caglaxy,
    title: "Caglaxy",
    urlsL: "https://cagalaxy.com/"

  }
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  }

  return (
    <div className='w-full  mx-auto p-3'>
      <div className=' flex flex-wrap justify-center items-center'>
        {

          data.slice(0, visibleCount).map((e, i) => {
             
            return (

            <div key={i} className='sm:max-w-[400px] p-2 bg-gray-800 text-white  m-3 rounded-lg shadow-xl
           shadow-gray-500  hover:bg-black duration-200'>
                <img src={e.image} />
                <div className='flex justify-between text-center items-center p-5  '>
                <h1 className='md:text-lg text-sm font-semibold text-orange-500 mt-2 mb-6'>{e.title}</h1>
                <h1>{e.description}</h1>
                <Link to={`${e.urlsL}`}><span className='border p-2 bg-transparent text-sm
                 border-white text-white  hover:bg-orange-500 rounded-lg '>Live Preview</span></Link>
                 </div>
                {/* <div></div> */}
                {/* <h1 className='bg-orange-500 inline-block w-10 h-10 text-center rounded-full p-2 absolute -top-10 -z-10'> {e.id}</h1> */}
              </div>
           

            )

          })

        }
      </div>
      {
        visibleCount < data.length && (
          <div className='w-full flex justify-center items-center'>

            <button onClick={handleLoadMore} className="p-2  bg-gray-200 border rounded-md shadow hover:bg-slate-500 ">See More</button>

          </div>
        )
      }


    </div>
  )
}

export default Project