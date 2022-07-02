import React from 'react'
import { Router } from './routes/router'
import { PokedexContext } from '@presentation/providers/pokedex/pokedex-context'
import GlobalStyles from '@presentation/styles/global'

export const App: React.FC = () => {
  return (
    <PokedexContext.Provider>
       <Router />
       <GlobalStyles />
    </PokedexContext.Provider>
  )
}
