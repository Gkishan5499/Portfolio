import React, { useEffect, useRef } from 'react'
import kisha from '../assets/kisha.png'
import Icons from './Icons'
import Typed from 'typed.js';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Tabs from './Tabs';
import ReactProject from './ReactProject';
import ShopifyProject from './ShopifyProject';


const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Wordpress Developer", "React Developer", "SEO Specialization"],
      startDelay: 100,
      typeSpeed: 50,
      backDelay: 50,
      backSpeed: 50,
      loop: true
    })
    return () => {
      typed.destroy();
    };

  }, [])



  return (
    <>

      <div className=' bg-gradient-to-l from-gray-800 to-gray-900 
      md:w-full md:min-h-96 md:flex md:justify-between md:items-center p-8 mb-5'>

        <div className='md:pl-8'>
          <h3 className='text-gray-100'>Hi, There ! I'm</h3>
          <h1 className='md:text-5xl text-3xl text-gray-200 leading-tight pt-3 pb-3'>
            A <span ref={el}></span><br /><span className='text-orange-500'>Kishan Gautam</span>
            <br /> based in Varanasi, India </h1>
          <p className='text-justify text-gray-50'>As a versatile web developer with expertise in WordPress,

            React, and SEO, <br />I bring a unique blend of technical skills and strategic thinking to every project.</p>
          <br />
          <a href="/contact" className='bg-orange-600 text-white text-lg rounded-xl 
            hover:bg-white hover:text-red-500 transition hover:translate-y-3 duration-300
             border-0 shadow-lg p-3 mt-5 mr-3' id='contact'>Hire Me</a>
          <a href="resume.pdf" download={"resume.pdf"} className='bg-gray-300 text-black text-lg rounded-xl  
            hover:bg-white hover:text-red-500 transition hover:translate-y-3 duration-300
             border-0 shadow-lg p-3 mt-5' id='contact'><FileDownloadIcon />Download CV</a>

          <Icons />
        </div>

        <div className='m-2 '>
          <div className='md:w-fit  rounded-full bg-orange-600 shadow-2xl shadow-orange-300'>
            <img className='object-cover rounded-full border-0 shadow-2xl  ' src={kisha} alt="kg" /></div>


        </div>

      </div>



      <br />
      <About />
  
      <div id='projects'>
      <h1 className='text-3xl text-orange-500 mt-8 text-center font-bold'>My Works</h1>
        <Tabs>
         <div title='Wordpress'>
          <Project/>
         </div>

         <div title='React'>
          <ReactProject/>
         </div>
         <div title='Shopify'>
          <ShopifyProject/>     
         </div>

         
        </Tabs>
    </div>
      <br />
      <br />

    <div className='w-full mx-auto'>
    <Contact id="contact"  />
    </div>
      

    </>

  )
}

export default Home