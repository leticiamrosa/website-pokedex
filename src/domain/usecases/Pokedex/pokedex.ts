import { IPokedex } from '@domain/models/pokemons/pokemons-model'

export interface Pokedex {
  getPokemons: () => Promise<Pokedex.Model>
}

export namespace Pokedex {
  export type Model = IPokedex
}
