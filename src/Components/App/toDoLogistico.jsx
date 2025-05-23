import { useState } from 'react'
import React from 'react'


function ToDoLogistico() {
    return (
        <section className='pt-16 pb-16'>
            {/* titulo */}
            <div className='lg:flex items-center justify-between' data-aos="fade-up">
                <div className='flex lg:flex-1 w-[100%] lg:w-[90%]'>
                    <div className='font-bold text-4xl/[1.07] md:text-5xl/[1.07] tracking-tight'>
                        <span className='pr-4 bg-clip-text bg-gradient-to-br from-white to-zinc-500 text-transparent'>
                            ¿TODO LO QUE PUEDES HACER CON
                            <br />
                            LOGISTICO?
                        </span>
                    </div>
                </div>
            </div>

            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-0'>
                {/* card 1 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* image */}
                        <div className='top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 
                                        rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px] '>

                            <div className='flex justify-center items-center'>
                                <div className='w-[90%] pt-2'>
                                    <span className='text-[10px] text-[#909095]'>Pregunta:</span>
                                    <div className=' h-[40px] bg-[#1e1e23] rounded-md flex justify-center items-center'>
                                        <p className='text-[10px] m-2 text-[#909095]'>¿cuál es el promedio de tiempo de permanencia de la región x ?</p>
                                    </div>
                                    <span className='text-[10px] text-[#909095]'>Proceso:</span>
                                    <div className="flex gap-4">
                                        <div className="bg-[#1e1e23] rounded-md  shadow-lg w-56 mt-2 px-2 py-2">
                                            <div className="text-[8px] uppercase text-gray-400 flex items-center">
                                                <span>🔍</span> Datos
                                            </div>
                                            <div className="flex flex-col items-center justify-center mt-2">
                                                <p className="text-[10px] font-bold text-white">12.500</p>
                                                <p className="text-[10px] text-gray-400">registros</p>
                                            </div>
                                        </div>

                                        <div className="bg-[#1e1e23] rounded-md  shadow-lg w-56 mt-2 px-2 py-2">
                                            <div className="text-[8px] uppercase text-gray-400 flex items-center">
                                                <span>⏱️</span> Respuesta
                                            </div>
                                            <div className="flex flex-col items-center justify-center mt-2">
                                                <p className="text-[10px] font-bold text-white">5.500 MS</p>
                                                <p className="text-[10px] text-gray-400">milisegundos</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>

                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200">OBTENER DATOS PRECISOS EN TIEMPO REAL</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Obtén información precisa, actualizada y útil al instante.</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* image */}
                        <div className="top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[300px]">
                            <div className="top-8 right-6 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px] ">
                                <div className='flex justify-center items-center'>
                                    <div className='w-[90%] pt-2'>
                                        <span className='text-[10px] text-[#909095]'>Pregunta:</span>
                                        <div className=' h-[40px] bg-[#1e1e23] rounded-md flex justify-center items-center'>
                                            <p className='text-[10px] m-2 text-[#909095]'>¿cuáles son los vehículos que exceden el promedio de tiempo de permanencia?</p>
                                        </div>
                                        <span className='text-[10px] text-[#909095]'>Resultado:</span>
                                        <div className="flex gap-4">
                                            <table className="w-full text-left table-auto min-w-max">
                                                <thead>
                                                    <tr>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="p-1 text-[10px] font-normal leading-none text-slate-300">
                                                                Placa
                                                            </p>
                                                        </th>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="text-[10px] font-normal leading-none text-slate-300">
                                                                Región
                                                            </p>
                                                        </th>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="text-[10px] font-normal leading-none text-slate-300">
                                                                Tiempo
                                                            </p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-zinc-700">
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-100 font-semibold">
                                                                DCD123
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                ABC
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                15.5 H
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-zinc-700">
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-100 font-semibold">
                                                                ADD123
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                PLT
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                12.5 H
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>

                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200">ANALIZAR TIEMPOS DE PERMANENCIA</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Detecta vehículos que exceden tiempos estándar en plantas, clientes o cualquier región.</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* grafica */}
                        <div className="top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px]">
                            <div className='flex justify-center items-center'>
                                <div className='w-[90%] pt-2'>
                                    <span className='text-[10px] text-[#909095]'>Datos:</span>
                                    <div className="flex gap-4">
                                        <div className="bg-[#1e1e23] rounded-md  shadow-lg w-56 mt-2 px-2 py-2">
                                            <div className="text-[8px] uppercase text-gray-400 flex items-center">
                                                <span>🔍</span> Región
                                            </div>
                                            <div className="flex flex-col items-center justify-center mt-2">
                                                <p className="text-[10px] font-bold text-white">Planta X</p>
                                            </div>
                                        </div>
                                        <div className="bg-[#1e1e23] rounded-md  shadow-lg w-56 mt-2 px-2 py-2">
                                            <div className="text-[8px] uppercase text-gray-400 flex items-center">
                                                <span>⏱️</span> Tiempo
                                            </div>
                                            <div className="flex flex-col items-center justify-center mt-2">
                                                <p className="text-[10px] font-bold text-white">15.5 HS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-2">
                                        <table className="w-full text-left table-auto min-w-max">
                                            <thead>
                                                <tr>
                                                    <th className="border-b border-zinc-700 bg-zinc-700">
                                                        <p className="p-1 text-[10px] font-normal leading-none text-slate-300">
                                                            Hora
                                                        </p>
                                                    </th>
                                                    <th className="border-b border-zinc-700 bg-zinc-700">
                                                        <p className="text-[10px] font-normal leading-none text-slate-300">
                                                            Tiempo
                                                        </p>
                                                    </th>
                                                    <th className="border-b border-zinc-700 bg-zinc-700">
                                                        <p className="text-[10px] font-normal leading-none text-slate-300">
                                                        </p>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-zinc-700">
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-100 font-semibold">
                                                            5:00AM
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            15 H
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            <span className="text-red-500">⬈</span>
                                                        </p>
                                                    </td>

                                                </tr>
                                                <tr className="hover:bg-zinc-700">
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-100 font-semibold">
                                                            10:00AM
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            6 H
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            <span className="text-green-500">⬊</span>
                                                        </p>
                                                    </td>

                                                </tr>
                                                <tr className="hover:bg-zinc-700">
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-100 font-semibold">
                                                            16:00PM
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            14.9 H
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            <span className="text-red-500">⬈</span>
                                                        </p>
                                                    </td>

                                                </tr>
                                                <tr className="hover:bg-zinc-700">
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-100 font-semibold">
                                                            20:00PM
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            17 H
                                                        </p>
                                                    </td>
                                                    <td className=" border-b border-slate-700">
                                                        <p className="text-[10px] text-slate-300">
                                                            <span className="text-red-500">⬈</span>
                                                        </p>
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>

                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200">MEJORAR EFICIENCIA EN PROCESOS LOGÍSTICOS</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Identifica cuellos de botella, zonas de alta espera y oportunidades de mejora.</p>
                    </div>
                </div>

                {/* card 4 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* grafica */}
                        <div className="top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px]">
                            <div className='flex justify-center items-center'>
                                <div className='w-[90%] pt-2'>
                                    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
                                        className="inline-flex items-center px-2 py-2 text-[10px] font-medium text-center text-white bg-[#1e1e23] rounded-lg  focus:outline-none focus:ring-0"
                                        type="button">
                                        Filtros
                                        <svg className="w-2 h-2 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div className="z-10  bg-[#1e1e23]rounded-lg shadow-sm w-[100%] h-[180px] mt-2">
                                        <div className="flex items-center  p-2">
                                            <input type="checkbox" id="opcion1" className="accent-green-600 w-3 h-3" checked={true} readOnly></input>
                                            <label htmlFor="opcion1" className="text-zinc-400/80 text-[12px] ml-2">Región</label>
                                        </div>
                                        <div className="flex items-center  p-2">
                                            <input type="checkbox" id="opcion1" className="accent-green-600 w-3 h-3" checked={true} readOnly></input>
                                            <label htmlFor="opcion1" className="text-zinc-400/80 text-[12px] ml-2">Vehículo</label>
                                        </div>
                                        <div className="flex items-center  p-2">
                                            <input type="checkbox" id="opcion1" className="accent-green-600 w-3 h-3" checked={true} readOnly></input>
                                            <label htmlFor="opcion1" className="text-zinc-400/80 text-[12px] ml-2">Zona</label>
                                        </div>
                                        <div className="flex items-center  p-2">
                                            <input
                                                type="text"
                                                id="input-group-search"
                                                className="bg-zinc-800 border border-zinc-700 text-gray-100 text-sm rounded-lg text-[10px] block w-full ps-10 p-2 focus:outline-none focus:ring-0 focus:border-zinc-700"
                                                placeholder="Buscar"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>
                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200">OBTENER DATOS POR FILTROS ESPECÍFICOS</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Accede rápidamente a datos específicos para mejorar la precisión de tus respuestas.</p>
                    </div>
                </div>

                {/* card 5 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* grafica */}
                        <div className="top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px]">
                            <div className="top-8 right-6 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px] ">
                                <div className='flex justify-center items-center'>
                                    <div className='w-[90%] pt-2'>
                                        <span className='text-[10px] text-[#909095]'>Pregunta:</span>
                                        <div className=' h-[40px] bg-[#1e1e23] rounded-md flex justify-center items-center'>
                                            <p className='text-[10px] m-2 text-[#909095]'>¿cuáles son los tiempos de permanencia del vehículo XX en la planta X?</p>
                                        </div>
                                        <span className='text-[10px] text-[#909095]'>Resultado:</span>
                                        <div className="flex gap-4">
                                            <table className="w-full text-left table-auto min-w-max">
                                                <thead>
                                                    <tr>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="p-1 text-[10px] font-normal leading-none text-slate-300">
                                                                Ingreso
                                                            </p>
                                                        </th>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="text-[10px] font-normal leading-none text-slate-300">
                                                                Salida
                                                            </p>
                                                        </th>
                                                        <th className="border-b border-zinc-700 bg-zinc-700">
                                                            <p className="text-[10px] font-normal leading-none text-slate-300">
                                                                Tiempo
                                                            </p>
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-zinc-700">
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-100 font-semibold">
                                                                06:00 AM
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                14:00 PM
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                8 H
                                                            </p>
                                                        </td>

                                                    </tr>
                                                    <tr className="hover:bg-zinc-700">
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-100 font-semibold">
                                                                09:00 AM
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                22:00 PM
                                                            </p>
                                                        </td>
                                                        <td className=" border-b border-slate-700">
                                                            <p className="text-[10px] text-slate-300">
                                                                13 H
                                                            </p>
                                                        </td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>

                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200"> CONSULTAR HISTORIAL DE INGRESOS Y SALIDAS</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Consulta fechas y horas de entrada y salida de cualquier vehículo.</p>
                    </div>
                </div>

                {/* card 6 */}
                <div className='flex flex-col order-1 bg-zinc-900/50 rounded-2xl ring-1 ring-zinc-100/10 h-[370px] overflow-hidden mt-14' data-aos="fade-up">
                    <div className='relative flex justify-center items-center mb-4 w-full h-full overflow-hidden [mask:linear-gradient(black_70%,transparent)]'>
                        {/* grafica */}
                        <div className="top-6 md:top-8 sm:right-6 md:right-8 absolute bg-zinc-900 rounded-lg ring-1 ring-zinc-100/10 w-[230px] h-[200px]">
                            <div className='flex justify-center items-center'>
                                <div className='w-[90%] pt-2'>
                                    <div className='flex flex-1 w-full'>
                                        <div className='w-full text-white flex flex-col gap-8'>
                                            <div className='w-[90%] self-start relative lg:max-w-sm bg-white/10 backdrop-blur-xl text-white p-3 rounded-xl shadow-lg text-sm mx-4 lg:mx-0'>
                                                <p className="mt-1 text-[10px]">¿cuál es la región con mayor tiempo promedio de permanencia en la zona X?</p>
                                                <div className='absolute right-6 -bottom-3 w-4 h-3 bg-white/10 backdrop-blur-md [clip-path:polygon(50%_100%,_0%_0%,_100%_0%)]'></div>
                                            </div>
                                            <div className="w-[90%] self-end relative lg:max-w-sm bg-[#071D49]/25 backdrop-blur-md text-white p-3 rounded-xl shadow-lg text-sm lg:mx-0">
                                                <p className="mt-1 text-[10px]">La región con el promedio más alto de permanecía es la planta XX con un tiempo promedio de 15 Horas</p>
                                                <div className="absolute left-6 -bottom-3 w-4 h-3 bg-[#071D49]/25 backdrop-blur-md [clip-path:polygon(50%_100%,_0%_0%,_100%_0%)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* svg fondo grafica */}
                        <div className='relative [mask:linear-gradient(to_left,transparent,black_150%)] -z-10 w-full h-full'>

                            <div className='top-0 right-0 -left-2 absolute'>
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 329">
                                    {/* genera lineas */}
                                    <path d="M38 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1zm32 0h1v328.2h-1z"
                                        opacity=".1" fill="#D4D4D8">
                                    </path>
                                    {/* genera linea */}
                                    <g filter="url(#a)">
                                        <path d="M391 131.6c-8.96-4.96-19.32-8.54-32.68-9.92-21.73-2.26-39.4-11.9-57.96-22.03l-.06-.03-3.74-2.04c-19.95-10.84-41.22-21.65-69.59-23.6-28.57-1.98-46.66 11.69-61.76 27.26a399.15 399.15 0 0 0-10.44 11.35l-.43.47a318.67 318.67 0 0 1-10.46 11.29c-7 7.08-14.14 12.92-22.38 16-8.58 3.22-16.3 8.42-24.15 14.25-2 1.49-4 3.01-6.04 4.56-5.98 4.54-12.2 9.26-19.13 13.66C55.9 183.17 35.74 191.7 6 191.44v2c30.17.27 50.7-8.4 67.26-18.92 7-4.46 13.31-9.25 19.31-13.8 2.02-1.54 4-3.05 5.97-4.5 7.83-5.82 15.36-10.88 23.66-13.99 8.65-3.23 16.04-9.32 23.1-16.47 3.54-3.58 7.02-7.44 10.53-11.36l.42-.46c3.38-3.78 6.81-7.6 10.4-11.3 14.93-15.4 32.48-28.58 60.18-26.67 27.91 1.93 48.85 12.55 68.77 23.37l3.86 2.1c18.5 10.1 36.5 19.93 58.66 22.23 13.52 1.4 23.89 5.1 32.88 10.23v-2.3Z" fill="#232831">
                                        </path>
                                    </g>
                                    {/* genera linea verde */}
                                    <path d="M391 132.18c-8.97-5-19.33-8.62-32.73-10-21.83-2.27-39.59-11.96-58.14-22.08-1.26-.7-2.53-1.39-3.81-2.08-19.94-10.84-41.13-21.6-69.38-23.55-28.36-1.96-46.32 11.59-61.37 27.12-3.6 3.72-7.05 7.57-10.44 11.34l-.41.47a320.88 320.88 0 0 1-10.48 11.3c-7.02 7.1-14.23 13-22.57 16.12-8.5 3.19-16.18 8.36-24.02 14.19-2 1.47-4 3-6.02 4.53-6 4.55-12.23 9.3-19.18 13.7-16.35 10.4-36.6 18.96-66.45 18.7v1c30.06.27 50.5-8.37 67-18.85 6.98-4.44 13.26-9.21 19.26-13.77 2.02-1.53 4.01-3.04 5.98-4.5 7.84-5.83 15.41-10.92 23.79-14.06 8.54-3.2 15.87-9.22 22.92-16.35 3.53-3.57 7-7.42 10.51-11.34l.41-.46c3.4-3.78 6.83-7.61 10.42-11.32 14.97-15.45 32.66-28.75 60.58-26.82 28.02 1.94 49.05 12.6 68.97 23.43l3.85 2.1c18.51 10.1 36.43 19.89 58.48 22.17 13.48 1.4 23.84 5.07 32.83 10.16v-1.15Z" fill="#232831">
                                    </path>
                                    <g filter="url(#b)">
                                        <path d="M391 15.35c-1.32.04-2.67.09-4.04.12-8.14.18-17.47 0-29.14-1.83-12.1-1.88-22.46 2.37-31.83 9.63-9.34 7.23-17.78 17.52-26.05 27.84l-1.48 1.85-.03.03c-7.8 9.73-15.49 19.33-23.79 26.51-8.81 7.63-18.2 12.4-28.95 11.73-11.43-.72-20.75 3.44-28.96 9.89-7.82 6.13-14.7 14.38-21.47 22.52l-.94 1.13c-7.12 8.54-14.17 16.84-22.24 22.6-8.03 5.72-17.03 8.9-28.07 7.26-27.5-4.1-39.95-7.28-48.58-10.74A109.8 109.8 0 0 1 84 138.36l-.1-.06a183.57 183.57 0 0 0-14.33-7.03C48.3 122.02 28.83 115.58 6 116.36v2c22.42-.77 41.59 5.54 62.77 14.75a179.83 179.83 0 0 1 14.18 6.96l.14.07c3.79 2.03 7.22 3.86 11.6 5.61 8.85 3.55 21.5 6.76 49.03 10.87 11.66 1.73 21.17-1.66 29.52-7.62 8.32-5.94 15.53-14.44 22.62-22.94l.89-1.07c6.82-8.2 13.57-16.3 21.21-22.3 7.95-6.23 16.8-10.14 27.6-9.46 11.5.73 21.38-4.41 30.4-12.21 8.44-7.3 16.24-17.05 24-26.73l.05-.06 1.49-1.87c8.3-10.34 16.6-20.44 25.72-27.5 9.09-7.05 18.91-11.01 30.3-9.24A160.7 160.7 0 0 0 387 17.47c1.37-.03 2.7-.07 4-.12v-2Z" fill="#C4D600">
                                        </path>
                                    </g>
                                    {/* genera linea azul */}
                                    <path d="M391 15.85c-1.31.04-2.66.09-4.03.12-8.16.18-17.52 0-29.23-1.83-11.92-1.86-22.15 2.32-31.44 9.53-9.29 7.19-17.69 17.43-25.97 27.75l-1.5 1.86-.02.03c-7.78 9.72-15.5 19.36-23.84 26.57-8.87 7.67-18.37 12.54-29.3 11.85-11.29-.71-20.49 3.39-28.63 9.78-7.78 6.1-14.62 14.32-21.4 22.47l-.94 1.11c-7.1 8.53-14.2 16.88-22.33 22.68-8.11 5.79-17.24 9.03-28.43 7.36-27.5-4.1-40.01-7.3-48.7-10.77-4.3-1.73-7.66-3.52-11.47-5.56l-.1-.05a182.78 182.78 0 0 0-14.3-7.02C48.12 122.5 28.72 116.08 6 116.86v1c22.52-.77 41.76 5.57 62.97 14.8 6.1 2.64 10.37 4.92 14.22 6.97l.12.07c3.8 2.02 7.21 3.84 11.56 5.59 8.8 3.52 21.4 6.73 48.92 10.83 11.5 1.72 20.89-1.63 29.16-7.53 8.26-5.9 15.43-14.34 22.52-22.86l.9-1.08c6.82-8.18 13.6-16.32 21.28-22.35 8.02-6.29 16.98-10.26 27.95-9.57 11.3.71 21.06-4.33 30.03-12.1 8.4-7.27 16.18-16.97 23.95-26.67l1.53-1.9c8.3-10.35 16.62-20.5 25.8-27.6 9.16-7.1 19.12-11.13 30.68-9.33a160.19 160.19 0 0 0 29.4 1.84c1.37-.03 2.7-.07 4.01-.12v-1Z" fill="#C4D600">
                                    </path>
                                    <g filter="url(#c)">
                                        <path d="M391 68.42c-10.93 2.27-22.86 8.06-39.81 21.84-10.79 8.76-21.28 10.2-31.88 7.37-10.69-2.85-21.52-10.06-32.84-18.72-3.66-2.8-7.37-5.76-11.13-8.75-7.83-6.24-15.9-12.66-24.23-18.29-12.36-8.35-25.45-15.04-39.53-16.9-28.3-3.74-46.09 14.3-59.94 32.47-2.63 3.46-5.11 6.9-7.5 10.22-3.94 5.47-7.61 10.58-11.29 14.78-5.9 6.74-11.43 10.67-17.46 10-6.96-.78-13.63 2.31-19.99 7.29-6.36 4.98-12.55 11.95-18.57 19.2a874.2 874.2 0 0 0-5.23 6.38A316.54 316.54 0 0 1 59.16 150c-5.8 6.26-11.36 11.07-16.75 13-9.98 3.56-16.55-.46-25.87-6.16l-2.19-1.34c-2.55-1.55-5.3-3.16-8.35-4.71v2.25c2.64 1.38 5.05 2.8 7.31 4.18l2.3 1.4c9.17 5.63 16.56 10.16 27.47 6.27 5.89-2.1 11.74-7.24 17.55-13.53 4.14-4.48 8.34-9.64 12.56-14.83 1.73-2.12 3.45-4.24 5.19-6.32 6-7.24 12.08-14.07 18.26-18.9 6.18-4.84 12.33-7.57 18.53-6.88 7.12.8 13.26-3.9 19.2-10.67 3.72-4.26 7.5-9.52 11.5-15.06 2.37-3.3 4.82-6.7 7.37-10.04 13.8-18.12 30.95-35.29 58.07-31.7 13.64 1.8 26.43 8.3 38.68 16.57 8.27 5.58 16.22 11.92 24.02 18.13 3.78 3.01 7.52 6 11.24 8.84 11.32 8.67 22.43 16.1 33.54 19.07 11.2 2.99 22.36 1.43 33.66-7.75 16.54-13.44 28.1-19.1 38.55-21.35v-2.05Z" fill="#0081F1">
                                        </path>
                                    </g>
                                    {/* filtro para sombra en la linea */}
                                    <path d="M391 68.93c-10.81 2.27-22.65 8.03-39.5 21.72-10.9 8.87-21.57 10.34-32.32 7.47-10.8-2.88-21.7-10.15-33.02-18.82a753.68 753.68 0 0 1-11.15-8.77c-7.82-6.23-15.86-12.63-24.18-18.24-12.33-8.33-25.35-14.98-39.32-16.83-28-3.7-45.63 14.12-59.47 32.28a463.86 463.86 0 0 0-7.47 10.18c-3.95 5.49-7.65 10.64-11.34 14.85-5.91 6.75-11.59 10.87-17.9 10.16-6.76-.75-13.3 2.25-19.62 7.2-6.32 4.94-12.48 11.87-18.5 19.12a802.1 802.1 0 0 0-5.21 6.37 319.7 319.7 0 0 1-12.48 14.72c-5.8 6.27-11.43 11.16-16.94 13.13-10.21 3.65-16.99-.5-26.27-6.19-.72-.44-1.46-.9-2.22-1.35A132.1 132.1 0 0 0 6 151.35v1.13c2.74 1.42 5.24 2.89 7.57 4.3l2.27 1.4c9.21 5.64 16.4 10.05 27.07 6.23 5.77-2.05 11.54-7.1 17.35-13.4 4.13-4.46 8.31-9.6 12.54-14.78a877 877 0 0 1 5.19-6.34c6.01-7.24 12.11-14.1 18.34-18.98 6.23-4.87 12.5-7.7 18.9-6.98 6.84.76 12.83-3.74 18.76-10.5 3.7-4.24 7.47-9.46 11.44-14.99 2.38-3.3 4.84-6.71 7.41-10.09 13.81-18.13 31.12-35.52 58.54-31.9 13.74 1.82 26.61 8.37 38.9 16.67 8.28 5.59 16.26 11.95 24.06 18.16 3.78 3.01 7.51 5.98 11.21 8.82 11.33 8.67 22.37 16.05 33.37 18.99 11.05 2.95 22.05 1.41 33.21-7.66C368.77 77.9 380.43 72.2 391 69.96v-1.03Z" fill="#0081F1">
                                    </path>
                                    <defs>
                                        <filter id="a" x="0" y="67.78" width="397" height="131.67" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="b" x="0" y="7.2" width="397" height="155.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                        <filter id="c" x="0" y="28.47" width="397" height="143.88" filterUnits="userSpaceOnUse">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_127_427">
                                            </feGaussianBlur>
                                        </filter>
                                    </defs>

                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-auto px-8 pb-8 w-full">
                        <h3 className="font-medium text-lg/none text-zinc-200">HACER PREGUNTAS EN LENGUAJE NATURAL</h3>
                        <p className="max-w-sm text-sm text-zinc-400/80">Pregunta cosas como:
                            "¿Cuál es el promedio de tiempo de permanencia de la zona x?"
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ToDoLogistico
