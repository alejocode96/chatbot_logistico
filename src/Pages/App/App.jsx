//React
import { useState } from 'react'
import React from 'react'

//Componentes
import ContentInitial from '../../Components/App/contentInitial'
import WhoIsLogistico from '../../Components/App/whoIsLogistico'
import ToDoLogistico from '../../Components/App/toDoLogistico'
//Estilos
import './App.css'


function App() {
  return (
    <>

      {/* Header */}
      <header className='absolute inset-x-0 top-0 z-10 w-full'>
        <div className='w-[90%] max-w-[90%] mx-auto relative flex justify-center'>
          <nav className='flex min-h-[5rem] w-full items-center justify-between'>
            <div className='flex lg:flex-1'>
              <a className='flex items-center'>
                <img src='../public/Logo.png' className='w-10 mr-4'></img>
                <span className='text-white text-2xl font-extralight'>LOGISTICO</span>
              </a>
            </div>
            <div className='flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300
                           transition hover:text-zinc-100 sm:space-x-6'>
              <button className='group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300
                                 hover:text-zinc-100 hover:shadow-glow'>
                <span className='absolute inset-0 overflow-hidden rounded-full'>
                  <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(196,214,0,0.6)_0%,rgba(196,214,0,0)_75%)]
                                  opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                  </span>
                </span>
                <div className='relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10'>Iniciar sesión</div>
                <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-[linear-gradient(to_right,transparent,#C4D600,#C4D600,transparent)]
                                transition-opacity duration-500 group-hover:opacity-40'>

                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* fondo */}
      <div className='absolute inset-0 -z-10 h-full bg-[image:radial-gradient(80%_50%_at_50%_-20%,rgba(196,214,0,0.5),rgba(255,255,255,0))]'></div>
      <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect>
      </svg>

      {/* Contenido */}
      <main className='w-[90%] mx-auto relative  justify-center pt-24 lg:pt-48'>
        {/* Contenido inicial */}
        <ContentInitial></ContentInitial>

        {/*Quien es logistico*/}
        <WhoIsLogistico></WhoIsLogistico>

         {/* que hacer con  logistico */}
         <ToDoLogistico></ToDoLogistico>
      </main>
    </>
  )
}

export default App
