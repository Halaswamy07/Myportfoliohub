import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsFillCloudDownloadFill } from "react-icons/bs";



const Banner = () => {
  return (
    <>
      <div className='banner'>
     
              <div className='content'>
                <h5 className='mb-md-4 mb-2'>Hi there, I&apos;m</h5>
                <h1 className='mb-md-3 mb-4'>HALASWAMY G</h1>
                <h6>I am MERN Stack Developer with expertise in Python and Java.</h6>

                <p className='light'>I specialize in MERN Stack development, with strong proficiency in Python and Java. My focus is on creating high-impact websites and web applications that drive overall product success. I also bring valuable experience as a freelancer</p>

<div className='d-flex align-items-center gap-4 pt-md-3 pt-5 mt-md-1 mt-5'>
<Link href='#contact' className='btn-banner light'>Contact me</Link>
<Link href='/halaswamy-resume.pdf' target='_black' download="halaswamy-resume.pdf" className='btn-outline-banner bold'>Download CV &nbsp; <BsFillCloudDownloadFill /></Link>
</div>
              </div>
           

        <div className='cicrle-bg'/>

<div className='d-flex justify-content-center'>
  <div className='sliderbar'>
    <div className='dot'/>
  </div>
</div>
      </div>
    </>
  )
}

export default Banner
