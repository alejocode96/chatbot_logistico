//React
import { useState } from 'react'
import React from 'react'


//componentes
import Main from '../../Components/App'
//contexto
import { LogisticoProvider } from '../../context';

function App() {
  return (
    <LogisticoProvider>
      <Main></Main>
    </LogisticoProvider>

  )
}

export default App
