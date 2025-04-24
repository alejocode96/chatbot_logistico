//React
import { useState } from 'react'
import React from 'react'

//Rutas
import { useRoutes, BrowserRouter } from 'react-router-dom';

//pages
import Home from '../Home'

//contexto
import { LogisticoProvider } from '../../context';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
  ])
  return routes
}

const App = () => {
  return (
    <LogisticoProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </LogisticoProvider>


  )
}

export default App
