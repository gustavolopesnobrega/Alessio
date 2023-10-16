'use client'
import Image from 'next/image';
import Link from 'next/link';
import bandeirabanbino from '../public/bandiera-bambino.jpg'
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

function Contact() {


    return (
        <div className='bg-slate-100 shadow-[0_0px_28px_6px_rgba(156,27,27,0.60)]' id='contact'>
            <div className='flex bg-red-800 justify-center gap-2 lg:justify-center'>
                <div className='bg-red-800 lg:py-18 text-white py-18 px-10 flex flex-col gap-2 lg:flex lg:gap-6 lg:w-full lg:justify-center'>
                    <div className='flex flex-col py-10 gap-4 w-full lg:justify-center align-middle'>

                        <h1 className='text-4xl font-bold flex justify-center '>Contatti</h1>
                        <p className='flex justify-center'></p>

                    </div>
                    <div className=' flex justify-center'>
                        <div className='flex flex-col gap-4 lg:flex-row justify-center '>
                            {/* <div className='flex gap-2'>
                                <AiOutlineFacebook className='text-4xl'></AiOutlineFacebook>
                                <Link href={'https://www.facebook.com/profile.php?id=61550028856634'} target='blank' className='flex justify-center pt-2 hover:text-slate-300 text-lg' >Facebook</Link>
                            </div> */}
                            <div className='flex gap-2'>
                                <AiOutlineInstagram className='text-4xl'></AiOutlineInstagram>
                                <Link href={'https://instagram.com/regenerationmolise?igshid=MWZjMTM2ODFkZg=='} target='blank' className='flex justify-center pt-2 hover:text-slate-300 text-lg'>Instagram</Link>
                            </div>
                            <div className='flex gap-2'>
                                <AiOutlineWhatsApp className='text-4xl'></AiOutlineWhatsApp>
                                <Link href={"https://api.whatsapp.com/send?phone=393792378680"} target='blank' className='flex justify-center pt-2 hover:text-slate-300 text-lg'>Whatssap</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 justify-center lg:justify-center py-10'>
                        <div className='flex gap-2 justify-center lg:justify-center hover:text-slate-300 '>
                            <Link href={'https://www.google.com/maps/place/Via+Cipriano+Facchinetti,+3,+86100+Campobasso+CB,+It%C3%A1lia/data=!4m2!3m1!1s0x133a74d5ce2d87c9:0xd14a9bb0071871a0?sa=X&ved=2ahUKEwijo_TeybqBAxWoILkGHSxoDhkQ8gF6BAgWEAA&ved=2ahUKEwijo_TeybqBAxWoILkGHSxoDhkQ8gF6BAgZEAI'} target='blank'><h3 className='flex justify-center text-xl'>Indirizzo:</h3>
                                <p className='flex justify-center text-xl'>Via Facchinetti 3, <br /> Campobasso</p></Link>
                        </div>
                        <div className='flex gap-2 justify-center lg:justify-center hover:text-slate-300'>
                            <Link href={"https://api.whatsapp.com/send?phone=393792378680"} target='blank'><h3 className='flex justify-center text-xl'>Telefono:</h3>
                                <p className='flex justify-center text-xl'>+39 379 237 8680</p></Link>
                        </div>
                        <div className='flex gap-2 justify-center lg:justify-center hover:text-slate-300'>
                            <Link href={'mailto:coop.regeneration@outlook.it'} target='blank'><h3 className='flex justify-center text-xl'>E-mail:</h3>
                                <p className='flex justify-center text-xl'>coop.regeneration@outlook.it</p></Link>
                        </div>

                    </div>
                </div>
            </div>

        </div >

    );
}

export default Contact;
