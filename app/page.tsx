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
            <div className='animate-slide-up z-[1001] px-10 py-36 text-2xl'>

              <h1 className="lg:text-4xl flex flex-col justify-center " >“Cominciate col fare ciò che è necessario, poi ciò che è possibile.
                <br /> E all'improvviso vi sorprenderete a fare l'impossibile.”
                <p className='py-4'>              San. Francesco di Assisi
                </p>
              </h1>

            </div>

          </motion.h1>

          <div className='flex flex-wrap gap-12 justify-center ' id='content-section'>
            <div className=' flex justify-center align-middle py-6  '>
              <div
                className="w-[400px] h-[400px] min-w bg-transparent cursor-pointer group perspective"
              >
                <div
                  className="relative preserve-3d group-hover:my-rotate-y-180 w-auto h-full duration-1000"
                >
                  <div className="absolute backface-hidden w-[400px] h-[400px]">
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]' id='service'>
                      <h1 className="text-3xl font-semibold px-4 text-white"></h1>
                    </div>

                    <Image src={bandeirabanbino} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>

                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>

                        Regeneration è un modello d'eccellenza che unisce il settore privato e le istituzioni per favorire l'integrazione dei discendenti italiani nella nostra regione. Offriamo servizi per ottenere la cittadinanza, cercare immobili, formazione e opportunità di lavoro. Siamo pronti ad accogliervi e rispondere alle vostre esigenze.

                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase">Integrazione del discendenti italiani in Italia</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold px-4 text-white "></h1>
                    </div>
                    <Image src={territorio} className="w-auto h-full " alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>

                        Regeneration promuove il territorio molisano in tutto il mondo, aprendo una finestra sul nostro ricco patrimonio storico, artistico e naturale per tutte le comunità italiane sparse nel globo. La nostra regione, situata nel cuore dell'Italia, rimane un luogo inesplorato, mantenendo intatta l'autenticità che rappresenta la tradizione più autentica del "Made in Italy
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase ">Promozione del territorio Italiano nel mondo</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold  text-white "></h1>
                    </div>

                    <Image src={turismo} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>
                        Regeneration, in collaborazione con le principali agenzie di viaggi regionali e nazionali, offre pacchetti turistici appositamente progettati per soddisfare le esigenze dei discendenti italiani. Siamo consapevoli che coloro che hanno radici italiane rappresentano una categoria speciale di “turista” e siamo pronti a offrire un sistema di accoglienza integrato per rendere il loro viaggio un'esperienza unica, immersa nell'autentica italianità.
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase">Turismo di ritorno</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold px-4 text-white  "></h1>
                    </div>
                    <Image src={cittadinanza} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 py-10"
                    >


                      <p>

                        Negli ultimi anni, il settore cittadinanza ha stabilito standard di eccellenza nei comuni della nostra regione. Regeneration ha sviluppato modelli di partenariato efficaci volti a  semplificare il riconoscimento della cittadinanza, garantendo tempi rapidi e costi accessibili. Questa collaborazione pionieristica con le istituzioni locali crea un'offerta di servizi unica in Italia per sostenere i diritti dei discendenti italiani.
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase">Cittadinanza Italiana</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold px-4 text-white "></h1>
                    </div>
                    <Image src={partnership} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>

                        Regeneration svolge un ruolo fondamentale come intermediario e punto d'incontro tra le imprese locali e quelle straniere, favorendo la cooperazione e lo scambio tra la Regione Molise e il resto del mondo. L'economia molisana vanta numerose risorse da presentare e esportare globalmente. Impegnata nella promozione del commercio internazionale, Regeneration organizza incontri per stimolare questa crescita economica.
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase">Promozione partenariato</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px] '>
                      <h1 className="text-3xl font-semibold px-4 text-white "></h1>
                    </div>
                    <Image src={cultura} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >

                      <p>
                        La promozione della cultura italiana nel mondo è un valore centrale di Regeneration. Il nostro ricco patrimonio storico, artistico e culturale, che ci distingue da ogni altra nazione, ha dato origine a grandi imperi e a figure che hanno positivamente influenzato la storia mondiale. Questo ci infonde orgoglio e, al contempo, ci conferisce la responsabilità di creare un ambiente propizio in cui i principi dell'umanesimo possano continuare a guidare uno sviluppo sostenibile e equo per le future generazioni.
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase ">Cultura</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold px-4 text-white "></h1>
                    </div>
                    <Image src={corso} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>
                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>

                        In collaborazione con Università e centri di formazione Rrgeneration fornisce la possibilità di usufruire un ampia gamma di corsi per dare la possibilità a tutti i discendenti di inserirsi con ancora più facilità nel contesto italiano ed europeo , i corsi di formazione offerti sono tutti certificati e prevedono il rilascio di attestasti e certificazioni in base al livello richiesto.

                      </p>

                    </div>
                  </div>

                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase">Corsi di formazione</h1>
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
                    <div className='flex absolute justify-center text-center pt-36 w-[400px] h-[400px]'>
                      <h1 className="text-3xl font-semibold px-4 text-white "></h1>
                    </div>
                    <Image src={diritti} className="w-auto h-full" alt='badeira banbino'></Image>
                  </div>

                  <div
                    className="absolute my-rotate-y-180 backface-hidden w-auto h-full bg-gray-100 overflow-hidden"
                  >
                    <div
                      className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6"
                    >


                      <p>

                        Noi consideriamo i discendenti di origine  italiana , cittadini italiani a tutti gli effetti , in questo senso abbiamo a cuore la protezione dei loro diritti e insieme al nostro team di legali e alle numerose associazioni con cui collaboriamo  ci impegniamo a favore della protezione dei loro diritti e dei loro interessi presso le istituzioni nazionali e europee.
                      </p>

                    </div>
                  </div>
                </div>
                <h1 className="text-xl font-medium px-4 py-2 text-black text-center uppercase ">Protezione diritti dei discendenti</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <Contact></Contact>
          <Footer></Footer>
        </div>

      </section>
    </main >
  )
}

