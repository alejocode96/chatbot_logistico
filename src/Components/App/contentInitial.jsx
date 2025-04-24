import { useState } from 'react'
import React from 'react'


function ContentInitial() {
    return (
        <section className='bg-'>
            {/* contenido */}
            <div className='w-full'>
                <div className='lg:flex items-center justify-between'>
                    <div className='flex lg:flex-1 w-full lg:w-1/2'>
                        <div>
                            <h1 className='bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-7xl/[1.07]
                                          font-bold tracking-tight text-transparent md:text-8xl/[1.07]'>
                                LOGISTICO
                            </h1>
                            <p className='pl-2 text-justify text-zinc-400'>
                                <span>Deja atrás la complejidad en la gestión logística. </span>
                                Ahora, cualquier miembro de tu organización puede acceder a información precisa y actualizada sobre tus procesos logísticos en segundos.
                                Eficiente. Confiable. Diseñado para tomar decisiones inteligentes.
                            </p>

                        </div>
                    </div>
                    <div className='flex flex-1 w-full lg:w-1/2 pr-4 md:pl-16 pt-8 lg:pt-0'>
                        <div className='w-full text-white flex flex-col gap-8'>
                            <div className='w-[90%] self-start relative lg:max-w-sm bg-white/10 backdrop-blur-xl
                                                text-white p-3 rounded-xl shadow-lg text-sm mx-4 lg:mx-0'>
                                <p><strong className="font-medium">¡Hola! Soy LOGISTICO,</strong></p>
                                <p className="mt-1">Estoy aquí para ayudarte a entender y consultar datos clave sobre tus procesos logísticos.</p>
                                <div className='absolute left-6 -bottom-3 w-4 h-3 bg-white/10 backdrop-blur-md [clip-path:polygon(50%_100%,_0%_0%,_100%_0%)]'></div>
                            </div>
                            <div className="w-[90%] self-end relative lg:max-w-sm bg-[#071D49]/25 backdrop-blur-md text-white p-3 rounded-xl shadow-lg text-sm lg:mx-0">
                                <p className="mt-1">¿Cómo puedo obtener información útil para optimizar y mejorar mis procesos logísticos?</p>
                                <div className="absolute right-6 -bottom-3 w-4 h-3 bg-[#071D49]/25 backdrop-blur-md [clip-path:polygon(50%_100%,_0%_0%,_100%_0%)]"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='group mt-6 lg:mt-38 mb-16'>
                    <a className='flex flex-col items-center gap-1' href='#Section_WhoIsLogistico'>
                        <p className='text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100'>Obtener más información</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100">
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default ContentInitial
