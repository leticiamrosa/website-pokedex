import React, { useEffect } from 'react'
import { Pokedex } from './pokedex.web'
import { PokedexContext } from '@presentation/providers/pokedex/pokedex-context'

export const PokedexContainer: React.FC = () => {
  const { getPokemons } = PokedexContext.useContainer()

  useEffect(() => {
    handleGetPokemons()
  }, [])

  const handleGetPokemons = async (): Promise<void> => {
    await getPokemons()
  }

  return <Pokedex />
}
