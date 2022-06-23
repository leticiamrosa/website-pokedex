import React from 'react'
import { Pokedex } from './pokedex.web'
import { PokemonsContext } from '@presentation/contexts/pokemons/pokemons-context'

export const PokedexContainer: React.FC = () => {
  const { count } = PokemonsContext.useContainer()
  return <Pokedex count={count}/>
}
