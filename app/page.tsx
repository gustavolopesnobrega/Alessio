'use client'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import { useEffect } from "react";
import Image from 'next/image';
import servicos from '../public/servicos.png'




const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  useEffect(() => {
    // Função para adicionar a classe após um pequeno atraso
    const addAnimationClass = () => {
      const h1Element = document.querySelector(".animate-slide-up");
      if (h1Element) {
        h1Element.classList.add("animate-slide-up-active");
      }
    };

    // Defina um atraso de 500ms (ou o valor que você preferir)
    const delay = 500;
    setTimeout(addAnimationClass, delay);
  }, []); // Certifique-se de passar um array vazio como segundo argumento para garantir que isso seja executado apenas uma vez, após a montagem inicial.

  return (
    <main className=" h-full bg-cyan-300 text-black pb-2 overflow-x-hidden ">
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>
        <div className='flex flex-col p-10 lg:flex-row lg:justify-start lg:px-60 lg:py-10 '>
          <div className=' flex justify-center text-2xl pt-28 lg:flex lg:min-w-max lg:mt-5 lg:text-4xl '>
            <h1 className="lg:text-4xl wiggle">“Cominciate col fare ciò che è necessario, poi ciò che è possibile.
              <br /> E all'improvviso vi sorprenderete a fare l'impossibile.”
              <p className='py-4'>              San. Francesco di Assisi
              </p>
            </h1>

          </div>

        </div>
        <div className='flex justify-center py-28'>
          <Image src={servicos} alt='' ></Image>
        </div>

      </section>

    </main>
  )
}
