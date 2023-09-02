'use client'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import Image from 'next/image';
import servicos from '@/public/servicos.png'




const inter = Inter({ subsets: ['latin'] })


export default function Service() {

    return (
        <main className=" h-full bg-cyan-300 text-black pb-2 overflow-x-hidden ">
            <section className=" min-h-screen relative "  >
                <NavBar></NavBar>
                <div className='flex justify-center py-28'>
                    <Image src={servicos} alt='' ></Image>
                </div>

            </section>

        </main>
    )
}

