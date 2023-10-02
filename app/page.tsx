'use client'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import { useEffect } from "react";
import Image from 'next/image';
import servicos from '../public/servicos.png'
import { motion } from 'framer-motion';
import bandeirabanbino from '../public/bandiera-bambino.jpg'
import cittadinanza from '../public/cittadinanza Italiana.jpeg'
import corso from '../public/corso-formazione.jpg'
import cultura from '../public/cultura-italiana.jpeg'
import diritti from '../public/Diritti.jpg'
import partnership from '../public/partnership.jpg'
import territorio from '../public/Territorio.jpg'
import turismo from '../public/Turismo di Ritorno.jpg'
import Contact from '@/components/contact';
import Footer from '@/components/footer';



const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main className=" h-full bg-cyan-300 text-black overflow-x-hidden ">
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>
        <div className='flex flex-col justify-center lg:flex-col lg:justify-start lg:px-60 lg:py-10 '>
          <motion.h1
            className="lg:text-4xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}


          >
            <div className='animate-slide-up z-[1001] py-40 px-6 flex justify-center text-2xl pt-28wg:flex lg:min-w-max lg:mt-5 lg:text-4xl '>

              <h1 className="lg:text-4xl flex flex-col justify-center" >“Cominciate col fare ciò che è necessario, poi ciò che è possibile.
                <br /> E all'improvviso vi sorprenderete a fare l'impossibile.”
                <p className='py-4'>              San. Francesco di Assisi
                </p>
              </h1>

            </div>

          </motion.h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10 ' id='content-section'>
            <div className=' flex justify-center align-middle py-6  '>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px] border-0" id='service'>
                    <Image src={bandeirabanbino} className="" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden "
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center text-gray-800 "
                    >
                      <h1 className="text-base font-semibold py-2">INTEGRAZIONE DELLE COMUNITA' DI DISCENDENTI ITALIANI IN ITALIA</h1>

                      <p className='text-[15px] lg:text-base '>

                        Abbiamo creato un circuito di eccellenza che fa di Regeneration il più avanzato esempio di cooperazione tra attori privati e istituzioni per promuovere l’integrazione dei discendenti italiani nel tessuto socio economico della nostra Regione.
                        Attraverso i nostri servizi i discendenti potranno essere accompagnati in un percorso che prevede l’ottenimento della cittadinanza , la ricerca di immobili , corsi di formazione e opportunità di lavoro .
                        Crediamo che il rientro dei discendenti nella nostra regione rappresenti la nostra più grande opportunità e saremo pronti ad accogliervi rispondendo a tutte le vostre esigenze
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] min-w bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={territorio} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Promozione del territorio Italiano nel mondo</h1>

                      <p>

                        Regeneration promuove il territorio Molisano nel mondo creando una finestra sul nostro patrimonio storico artistico e naturale per tutte le comunità degli italiani nel mondo, il nostro territorio  nel cuore dell’Italia rappresenta ancora oggi un luogo da scoprire , che mantiene integra quell’autenticità che raappresenta oggi la piu originale tradizione del Made in Italy.

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={turismo} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Turismo di ritorno</h1>

                      <p>

                        Regeneration in collaborazione con le più importanti agenzie di viaggi regionali e nazionali propone pacchetti turistici disegnati sulle necessità di discendenti , siamo coscienti che i discendenti di origine italiana rappresentano una categoria speciale di “Turista” e siamo pronti a rispondere con un sistema di accoglienza integrato per rendere il loro viaggio un esperienza unica nel segno di un immersione nella più profonda italianità !

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={cittadinanza} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 py-10"
                    >
                      <h1 className="text-xl font-semibold">Assistenza all’ottenimento…</h1>

                      <p>

                        I responsabili del settore cittadinanza hanno lavorato negli ultimi anni in molti comuni della nostra regione , sviluppando standard di eccellenza nel mercato della cittadinanza.
                        Regeneration  ha sviluppato un nuovo sistema di partnership con i comuni per garantire il riconoscimento della cittadinanza nel rispetto delle leggi italiane con tempistiche rapide e garandendo prezzi alla portata di tutti .
                        Per la prima volta nella storia si Regeneration riesce a coinvolgere le  istituzioni locali che da oggi si impegnano a favore dei diritti dei discendenti , anziche contrastare questo flusso , creando un offerta di servizi unica in Italia.

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={partnership} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Promozione partenariato….</h1>

                      <p>

                        Regeneration fa da intermediario e da punto di incontro tra le realtà imprenditoriali locali e quelle estere , promuovendo forme di cooperazione e di interscambio tra la Regione Molise e il Mondo , l’economia Molisana ha moltissime ricchezze da presentare e esportare nel mondo.
                        Regeneration si impegna a sviluppare incontri per la promozione del commercio internazionale.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden -[400px] h-[400px] ">
                    <Image src={cultura} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Cultura</h1>

                      <p>

                        La promozione della cultura italiana nel mondo è un principio chiave di Regeneration ….
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={corso} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Corsi di formazione </h1>

                      <p>

                        In collaborazione con Università e centri di formazione Rrgeneration fornisce la possibilità di usufruire un ampia gamma di corsi per dare la possibilità a tutti i discendenti di inserirsi con ancora più facilità nel contesto italiano ed europeo , i corsi di formazione offerti sono tutti certificati e prevedono il rilascio di attestasti e certificazioni in base al livello richiesto.

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=' flex justify-center align-middle py-6'>
              <div
                className="w-[400px] h-[400px] bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <Image src={diritti} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >
                      <h1 className="text-2xl font-semibold">Protezione diritti dei discendenti</h1>

                      <p>

                        Noi consideriamo i discendenti di origine  italiana , cittadini italiani a tutti gli effetti , in questo senso abbiamo a cuore la protezione dei loro diritti e insieme al nostro team di legali e alle numerose associazioni con cui collaboriamo  ci impegniamo a favore della protezione dei loro diritti e dei loro interessi presso le istituzioni nazionali e europee.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>





        </div>
        <Contact></Contact>
        <Footer></Footer>
      </section>
    </main >
  )
}

