import { useState } from 'react'
import React from 'react'

//contexto
import { LogisticoContext } from '../../context';

//navegacion
import { NavLink } from 'react-router-dom'

function HowToAsk() {

    //preguntas dinamicas
    const {
        currentText
    } = React.useContext(LogisticoContext);

    return (
        <>

            <section className='pt-16 pb-16'>
                {/* titulo */}
                <div className='lg:flex items-center justify-between' data-aos="fade-up">
                    <div className='flex lg:flex-1 w-full lg:w-1/2'>
                        <div className="font-bold text-5xl/[1.07] md:text-7xl/[1.07] tracking-tight">
                            <span className="pr-4 bg-clip-text bg-gradient-to-br from-white to-zinc-500 text-transparent">
                                COMO REALIZAR PREGUNTAS
                                <br />EN LOGISTICO</span>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 pr-4  md:pl-16 pt-8 lg:pt-0'>
                        <p className='text-justify text-zinc-400 pb-4'><span className='font-semibold'>Puedes hacerme todo tipo de preguntas relacionadas con los tiempos logísticos,
                            ya sea sobre vehículos, regiones, zonas, operaciones u otros aspectos del sistema.</span> Sin embargo, para que la respuesta que recibas sea
                            precisa, clara y verdaderamente útil, es fundamental que formules tu pregunta de manera adecuada.Utilizar los términos correctos y ser específico en lo que deseas consultar le permitirá al sistema comprender
                            con mayor exactitud tu intención, y así generar una respuesta ajustada a tus necesidades.
                        </p>
                        <p className='text-justify text-zinc-400 pb-4'></p>
                        <p className='text-justify text-zinc-400 pb-4'>A continuación, encontrarás algunas pautas y ejemplos prácticos que te ayudarán a formular mejores preguntas y a obtener
                            resultados más relevantes.</p>
                    </div>
                </div>

                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 lg:pt-14'>

                    {/* card 1 */}
                    <div className='relative flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-full overflow-hidden mt-14' data-aos="fade-up">
                        <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                            <h3 className="font-medium text-lg/none text-zinc-200 mb-1 pb-1 uppercase">Usa las palabras claves correctas</h3>
                            <hr className='w-[85%] text-zinc-400/10'></hr>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Para obtener resultados precisos, utiliza palabras clave como: "placa", "vehículo", "región", "geocerca", "operación", "tipo de vehículo" o "tipo de tráiler", según el enfoque de tu consulta.</p>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Ejemplos: ¿Cuál es el promedio de tiempo del vehículo AGC345?, ¿Cual el tiempo promedio de la región X?, ¿Cual es el tiempo promedio para la operación de ensacado?, ¿Cuál es el tiempo promedio para el cargue en la región x?.
                                ¿Cuáles son las regiones con el promedio de tiempo de permanencia más alto?.</p>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Recuerda: cuanto más específica sea tu pregunta, mejor será la respuesta.</p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='relative flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-full overflow-hidden mt-14 lg:mt-1' data-aos="fade-up">
                        <div className="absolute  right-6 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                            <div className="h-px w-full animate-starlight-right  bg-gradient-to-r from-[#C4D600]/0 via-[#00A3E0] to-[#00A3E0]/0">
                            </div>
                        </div>
                        <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                            <h3 className="font-medium text-lg/none text-zinc-200 mb-1 pb-1 uppercase">¿Quieres hacer cálculos de tiempo?</h3>
                            <hr className='w-[85%] text-zinc-400/10'></hr>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Puedes incluir fechas específicas o rangos de fechas en tu consulta para obtener comparaciones útiles y detectar oportunidades de mejora en los resultados."</p>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Puedes hacer preguntas sobre promedios de permanencia:
                                Ejemplo: ¿Cuál es el promedio del tiempo de permanencia en la región X (en horas o minutos)?, ¿Cuál es el promedio de tiempo de permanencia para la región x en los meses de enero y febrero del 2025?."</p>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Puedes hacer preguntas sobre Filtros por tiempo específico:
                                Ejemplo: ¿Qué vehículos estuvieron más de 2 horas en la región norte?"</p>

                        </div>
                        <div className="absolute -bottom-[7px] left-6 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                            <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-[#C4D600]/0 via-[#00A3E0] to-[#00A3E0]/0">
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='relative flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-full  overflow-hidden mt-14' data-aos="fade-up">

                        <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                            <h3 className="font-medium text-lg/none text-zinc-200 mb-1 pb-1 uppercase">Evita hacer preguntas generales o ambiguas</h3>
                            <hr className='w-[85%] text-zinc-400/10'></hr>
                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Es importante evitar preguntas
                                demasiado amplias o ambiguas como: “Dame toda la información.”, “Muéstrame los datos.”, “Quiero ver todo lo que hay de los tiempos en región.”,
                                Este tipo de consultas no dan suficiente contexto y dificultan obtener resultados útiles.</p>

                            <p className=" text-sm text-zinc-400/80  w-full">&bull; Sé específico y claro, formula preguntas que respondan a:
                                ¿Qué información necesitas? (ejemplo: tiempo, vehículos, región, promedio)
                                ¿Sobre qué aspecto estás preguntando? (ejemplo: región, tipo de operación, vehículo)
                                ¿Deseas aplicar algún filtro? (ejemplo: “solo los vehículos que estuvieron más de 5 horas”, “durante marzo”, “en la zona centro”)</p>

                        </div>

                    </div>
                </div>
                <div className="mt-20 col-span-full flex h-[580px] lg:h-[500px] flex-col overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-zinc-100/10 lg:col-span-1" data-aos="fade-up">
                    <div className="absolute  right-6 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                        <div className="h-px w-full animate-starlight-right  bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0">
                        </div>
                    </div>
                    <div className='relative flex h-full w-full transform-gpu items-center justify-center overflow-hidden'>
                        <div className="absolute inset-0 h-full w-full [mask:radial-gradient(50%_50%_at_50%,rgba(0,0,0,0.7)_35%,rgba(0,0,0,0)_100%)]">
                            <div className="absolute inset-0 -z-10 h-full w-full text-zinc-300/10 [mask:linear-gradient(black,black_60%,transparent)]">
                                <svg className="h-full w-full" aria-hidden="true">
                                    <defs>
                                        <pattern id="genius-pattern" width="44" height="44" x="50%" y="100%" patternUnits="userSpaceOnUse">
                                            <path d="M.5 200V.5H200" fill="none" stroke="currentColor"></path>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#genius-pattern)">
                                    </rect>
                                </svg>
                            </div>
                        </div>
                        <div className="relative flex h-full w-full flex-col items-center justify-end px-4 pb-12 sm:px-8 lg:pb-16">
                            <div className="rounded-xl bg-[#071D49]/30 p-2 mt-14">
                                <div className="select-none rounded-md bg-[#071D49] px-3 py-2 text-sm font-medium text-zinc-200">
                                    Hola! Soy LOGISTICO en que puedo ayudarte?</div>
                            </div>
                            <div className="h-auto mt-10 flex w-full items-center justify-between rounded-md bg-zinc-900 px-3 py-2 shadow-md ring-1 ring-zinc-200/10">
                                <div className=" items-center  text-sm text-zinc-400 flex">✨
                                    <div>
                                        <p className=''>
                                            {currentText}
                                            <span className="blinking-cursor">|</span>
                                        </p>
                                    </div>
                                </div>
                                <button className="relative inline-flex shrink-0 text-sm font-medium text-zinc-200">
                                    <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-3 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40 max-md:hidden">
                                        Enviar
                                    </span>
                                    <span className="z-10 inline-flex h-full w-full items-center justify-center rounded-md bg-zinc-950 px-2 py-1.5 ring-1 ring-zinc-400/10 transition hover:ring-zinc-400/40 md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                                            <path d="m9 18 6-6-6-6">
                                            </path>
                                        </svg>
                                    </span>
                                    <span
                                        className="absolute h-full w-full blur-[1rem] motion-safe:animate-pulse"
                                        style={{
                                            background: `linear-gradient(90deg,rgba(196, 214, 0, 0.2) 0%, rgba(150, 180, 0, 0.3) 10%,
                                        rgba(100, 150, 0, 0.4) 25%,rgba(80, 130, 0, 0.5) 45%,rgba(120, 160, 0, 0.6) 65%,rgba(180, 200, 0, 0.4) 80%,rgba(196, 214, 0, 0.3) 100%)`
                                        }}
                                    ></span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="mt-auto w-full space-y-4 px-4 pb-4 sm:px-8 sm:pb-8">
                        <h3 className="text-lg/none font-medium text-zinc-200 uppercase">
                            Algunos ejemplos de buenas preguntas</h3>
                        <p className=" text-sm text-zinc-400/80">
                            &bull; "¿Cuál fue el tiempo promedio de permanencia en la región planta XX?"
                        </p>
                        <p className=" text-sm text-zinc-400/80">
                            &bull; "¿Cuáles son las regiones con el promedio de tiempo de permanencia más alto durante el mes de enero en la zona norte?"
                        </p>
                        <p className=" text-sm text-zinc-400/80">
                            &bull; "¿Top 10 de las regiones con el promedio de tiempo de permanencia mas alto durante el mes de marzo de 2025?"
                        </p>
                        <p className=" text-sm text-zinc-400/80">
                            &bull; "¿Cuáles vehículos estuvieron más de 5 horas en la zona norte para la operación ensacado?"
                        </p>
                        <p className=" text-sm text-zinc-400/80">
                            &bull; "¿Cuál es el vehículo con el tiempo de permanencia mas alto entre el 01/02/2025 y el 07/02/2025 y en qué región fue ?"
                        </p>
                    </div>
                    <div className="absolute bottom-[-5.87px] lg:bottom-[-5.96px] left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                        <div className="h-px w-full animate-starlight-left bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600] to-[#C4D600]/0">
                        </div>
                    </div>
                </div>


            </section >
            <div className='pt-6'>
                <div className="relative mx-auto mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8"  data-aos="fade-up">
                    {/* Línea superior fina */}
                    <div aria-hidden="true" className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(196,214,0,0.65)_50%,rgba(0,0,0,0)_100%)]"></div>
                    {/* Fondo decorativo */}
                    <div aria-hidden="true" className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] md:max-w-[600px]"></div>
                    <div className="relative isolate">
                        {/* Patrón SVG de fondo */}
                        <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]" aria-hidden="true">
                            <defs>
                                <pattern id="cta" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#cta)" />
                        </svg>
                        {/* Fondo de figura decorativa */}
                        <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                            <div className="aspect-[1108/532] w-[69.25rem] flex-none bg-gradient-to-r from-[#C4D600] to-[#6CC24A] opacity-20" style={{
                                clipPath: "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)"
                            }}>
                            </div>
                        </div>
                        {/* Contenido principal */}
                        <div className="mx-auto max-w-xl text-center">
                            <h2 className="bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                                Tu nuevo aliado para decisiones logísticas rápidas y precisas.
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400/80">
                                LOGISTICO es el nuevo asistente inteligente que responde todas tus preguntas sobre tiempos logísticos.
                            </p>
                            {/* Botón */}
                            <div className="mt-12 flex items-center justify-center">
                                <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rvr9ukq:" data-state="closed">
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(196,214,0,0.6)_0%,rgba(196,214,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        </span>
                                    </span>
                                    <NavLink to='/login'>
                                        <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                            Inicia sesión ahora
                                        </div>
                                    </NavLink>

                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#C4D600]/0 via-[#C4D600]/90 to-[#C4D600]/0 transition-opacity duration-500 group-hover:opacity-40">
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToAsk
