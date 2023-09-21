'use client'
import Image from 'next/image';
import Link from 'next/link';
import bandeirabanbino from '../public/bandiera-bambino.jpg'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import logoalessio from '../public/logoalessio.png'

function Footer() {


    return (
        <div className='bg-red-900 flex-col justify-around '>
            <div className='flex justify-center py-4'>
                <Image src={logoalessio} alt='logoalessio' className='w-10 h-10'></Image>
            </div>
            <div className='flex justify-center py-4 text-white'>
                <span>Copyright © 2023 Alessio | All rights reserved.</span>
            </div>

        </div>

    );
}

export default Footer;
