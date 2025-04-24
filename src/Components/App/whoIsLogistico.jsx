import { useState } from 'react'
import React from 'react'


function WhoIsLogistico() {
    return (
        <section className='pt-16 pb-16'>
            {/* contenido */}
            <div className='w-full'>
                <div className='lg:flex items-center justify-between'>
                    <div className='flex lg:flex-1 w-full lg:w-1/2'>
                        <div>
                            <p className='text-justify text-zinc-400 text-5xl font-extralight'>CONOCÉ A</p>
                            <p className='bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-7xl/[1.07] 
                                  font-bold tracking-tight text-transparent md:text-8xl/[1.07]'>LOGISTICO</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 pr-4 md:pl-16 pt-8 lg:pt-0'>
                        <p className='text-justify text-zinc-400 pb-4'>
                            <span className='font-semibold'>Logístico </span>
                            es nuestro asistente virtual especializado en procesos logísticos. Está diseñado para brindarte información precisa, en tiempo real y basada en datos operativos confiables.
                        </p>
                        <p className='text-justify text-zinc-400 pb-4'>
                            Conectado directamente a nuestros sistemas, te ofrece respuestas inmediatas que te ayudan a tomar decisiones más
                            ágiles, seguras y eficientes.
                        </p>
                    </div>

                </div>

                <div className='relative pt-18' style={{ transform: 'none' }}>
                    <div className='absolute top-[73px] right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64'>
                        <div className='h-px w-full animate-starlight-right bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0'></div>
                    </div>
                    <div>
                        <div>
                            <img
                                alt='APP SCREENSHOT'
                                fetchPriority='high'
                                width="4200"
                                height="2490"
                                decoding="async"
                                data-nimg="1"
                                className="rounded-md lg:rounded-2xl"
                                style={{ color: 'transparent' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                src='../public/page.png'>
                            </img>
                        </div>
                    </div>
                    <div className="absolute -bottom-2 left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                        <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0">
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default WhoIsLogistico
