import Image from 'next/image'
import React from 'react'
import logo from '../public/logo/logo.png';
import Link from 'next/link';
import { CgMenuRight } from "react-icons/cg";
import { BsFillCloudDownloadFill } from "react-icons/bs";


const Navbar = () => {
  const togglemenu=()=>{
const menu = document.getElementById('menu');
menu.classList.toggle('openmenu')
  }

  return (
    <>
     <nav>
        <div className='navbar_logo d-flex align-items-center gap-1'>
            <Image src={logo}  alt='HALASWAMY'/>        
        </div>
        <ul className='nav_items' id='menu'>
<Link href="/"><li className='nav_list'>Home</li></Link> 
<Link href="#aboutme"><li className='nav_list'>About me</li></Link> 
<Link href="#project"><li className='nav_list'>Certifications</li></Link> 
<Link href="#contact"><li className='nav_list'>Contact me</li></Link> 
<Link href='/halaswamy-resume.pdf' target='_black' download="halaswamy-resume.pdf" className='btn-banner light mobile-none'>Download my CV  &nbsp; <BsFillCloudDownloadFill /></Link>

        </ul>


        <div className='menu' onClick={togglemenu}>
        <CgMenuRight  className='icon'/>
        </div>
     </nav> 
    </>
  )
}

export default Navbar
