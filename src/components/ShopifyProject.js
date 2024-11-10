import React, { useState } from 'react'
import Shopify from '../assets/shopify (1).jpeg'
import { Link } from 'react-router-dom';



const ShopifyProject = () => {
  const data = [{
    id: 1,
    image: Shopify,
    title: "Vós Essencial Beauty ",
    urlsL: "https://vosessencial.com/"

  },
  ,
  
  
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  }

  return (
    <div className='w-full  mx-auto'>
      <div className='grid md:gap-x-8 gap:x-4 md:gap-y-4 gap-y-2 md:grid-cols-3 grid-cols-2 p-4'>
        {

          data.slice(0, visibleCount).map((e, i) => {

            return (

              <div key={i} className='p-2 bg-gray-800 text-white  m-3 rounded-lg shadow-xl
           shadow-gray-500  hover:bg-black duration-200'>
                <img src={e.image} />
                <div className='sm:flex sm:justify-between text-center items-center pt-5  '>
                <h1 className='md:text-lg text-sm font-semibold text-orange-500 mt-2 mb-6 '>{e.title}</h1>
                <h1>{e.description}</h1>
                <Link to={`${e.urlsL}`}><span className='border p-2 bg-transparent
                 border-white text-white text-lg hover:bg-orange-500 rounded-lg '>Live Preview</span></Link>
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

export default ShopifyProject