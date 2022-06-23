import React from 'react'
import { Router } from './routes/router'
import { PokemonsContext } from '@presentation/contexts/pokemons/pokemons-context'

export const App: React.FC = () => {
  return (
    <PokemonsContext.Provider>
       <Router />
    </PokemonsContext.Provider>
  )
}
