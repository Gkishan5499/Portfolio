import React, { useState } from 'react'
import Icons from './Icons';
import swal from 'sweetalert'
import emailjs from '@emailjs/browser';



const Contact = () => {
   const[user, setUser]=useState({
    name:"",
    email:" ",
    message:""
   });

   
   const adduser= async(e)=>{
    try{
    
      e.preventDefault();
      const serviceId= "service_jzrwcxq";
      const templateId= "template_q7qarex";
      const publickey="ZPkR47gBF-bFMnrBX";

      const{name,email,message}=user;
      const templateParams={
        from_name:name,
        from_email:email,
        to_name:'Kishan Kumar',
        message:message,

      }

    emailjs.send(serviceId,templateId,templateParams,publickey)
     .then((response)=>{
      console.log("email sent successfully",response);
       swal({
        title:"successfull message sent",
        icon:'success',
        buttons:false,
        timer:3000

       });

       setUser({
        name:"",
        email:"",
        message:""
       })

     })
  //  const res= await fetch("https://portfolio-49846-default-rtdb.firebaseio.com/contact.json",
  //  {
  //   method:'POST',
  //    headers:{
  //     'Content-Type':'application/json'
  //    },
  //    body:JSON.stringify({
  //     name,
  //     email,
  //     message,
  //    })
  //  })
     
   
    
     } 
  
    catch(error){
     console.log(error);
    }

  }

  

  return (
    <>
      <div className=' md:w-full md:min-h-screen w-full p-3'>
     <h1 className='md:text-center text-3xl font-bold text-orange-500 pt-10'>Contact me</h1>
      <div className='md:flex md:justify-between md:item-center  space-y-20'>
     
      <div className='w-full md:w-1/2 md:flex flex justify-center items-center'>
      <div>
        <h1 className='text-3xl font-bold text-white mt-2'>Stay and Connect to me </h1>
        <div className='flex text-white mt-3 '>
        <h2 className='font-bold text-white mr-2 '>Address:</h2>
        <p className='md:text-lg text-sm'>Lathiya Varanasi, Uttar Pradesh ,India</p>
        </div>
        <div className='flex text-white mt-3'>
        <h2 className="font-bold mr-2">Email:</h2>
        <p>kishangautam1508@gmail.com</p>
        </div>
        <div className='flex text-white mt-3'>
        <h2 className="font-bold mr-2">Mobile:</h2>
        <p>+91-6394571551</p>
        </div>
        <Icons/>
      </div>
          
      </div>
      <div className='md:w-1/2 w-full p-4  '>
      <form className='md:flex md:flex-wrap md:justify-start '  onSubmit={adduser} >
       
      <input
       type="text" 
       name='name'
       value={user.name}
       required={true}
       onChange={(e)=>setUser({...user, name:e.target.value})}

       placeholder='Name' 
       className='w-3/4 bg-transparent border shadow-lg h-12 md:mt-4 p-2 text-white' />

      <input 
      type="email"
       name='email'
       required={true}
       value={user.email}
       onChange={(e)=>setUser({...user, email:e.target.value})}
        placeholder='Email'
      className='w-3/4 bg-transparent border  shadow-lg h-12  mt-4 p-2 text-white' />

      <textarea 
      name="message"
       id="message"
       value={user.message}
       required={true}
       onChange={(e)=>setUser({...user, message:e.target.value})}
       placeholder='Message'
      className='w-3/4 h-20 mt-4 p-2 bg-transparent text-white border'></textarea>

      <button type='submit' className='bg-orange-500 p-2 text-white w-3/4 mt-4' >Send Me</button>

      </form>
       

      </div>
      </div>
      </div>
    </>
  )
}

export default Contact