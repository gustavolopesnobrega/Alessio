'use client'
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import logoalessio from '../public/logoalessio.png'
import Image from 'next/image';
import Link from 'next/link';
import bandeirabanbino from '../public/bandiera-bambino.jpg'


function NavBar() {

  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <div className=' text-black flex-col bg-cyan-300 overflow-x-hidden '>
      <nav className=" flex justify-between  gap-10 md:py-6 md:flex lg:px-10 ">
        <div className='z-[1000] py-4 px-6'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={` absolute flex z-50 left-0 top-0 text-black justify-start bg-green-600 w-full h-[56vh] transition-all duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className=' flex flex-col py-28 px-16 lg:px-28 gap-16 text-2xl max-h-screen '>
            <Link href={"/"} className=' border-b-2 divide-slate-900 transition ease-in-out hover:translate-x-4 hover:scale-110 duration-200 ...' id="work" >Home</Link>
            <Link href={"#service"} className=' border-b-2 divide-slate-200 transition ease-in-out hover:translate-x-4 hover:scale-110 duration-200 ...'>Service</Link>
            <Link href={"#contact"} className=' border-b-2 divide-slate-200 transition ease-in-out hover:translate-x-4 hover:scale-110 duration-200 ...'>Contact</Link>
          </ul>

        </div>
        {/* <ul className=' hidden md:flex mx-4 gap-2 md:px-24 lg:px-48 lg:align-middle md:gap-16 font-medium py-2 lg:text-lg lg:mt-3 '>
          <li className='md:hover:text-dots-blue align-middle '>
            <a href={"/projetos"}>Home</a>
          </li>
          <li className=' text-black md:hover:text-dots-blue'>
            <a href={"/resume"} >About</a>
          </li>
          <li className='md:hover:text-dots-blue'>
            <a href={"/contato"} >Service</a>
          </li>
          <li className='md:hover:text-dots-blue'>
            <a href={"/contato"} >Contact</a>
          </li>
        </ul> */}

        <div className=' p-2 lg:pr-20'  >
          <Link href="/"><Image src={logoalessio} alt='' height={80} width={80} ></Image></Link>
        </div>
      </nav>

    </div>

  );
}

export default NavBar;
