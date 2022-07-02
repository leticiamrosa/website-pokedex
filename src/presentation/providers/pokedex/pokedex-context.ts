import { useState, useMemo, useRef } from 'react'
import { Pokedex } from '@domain/usecases/Pokedex/pokedex'
import { IPokemon } from '@domain/models/pokemon/pokemon-model'
import { makeRemotePokedex } from '@main/factories/usescases/pokedex/remote-pokedex-factory'
import { createContainer } from 'unstated-next'

interface IPokedexContext {
  pokemons: IPokemon[]
  loading: boolean
  error: Error
  getPokemons: () => Promise<void>
}

const usePokedexContext = (): IPokedexContext => {
  const service = useMemo(() => makeRemotePokedex(), [])
  const pokedexService = useRef<Pokedex>(service)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const [pokemons, setPokemons] = useState<IPokemon[]>(null)

  const getPokemons = async (): Promise<void> => {
    if (!pokedexService?.current) return

    try {
      setLoading(true)
      const result = await pokedexService.current.getPokemons()
      console.log('getPokemons result', result)
      setPokemons(result.pokemons)
    } catch (error) {
      setError(error)
      throw new Error('error')
    } finally {
      setLoading(false)
    }
  }

  return {
    pokemons,
    loading,
    error,
    getPokemons
  }
}

export const PokedexContext = createContainer(usePokedexContext)
