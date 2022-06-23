import { IPokedex } from '@domain/models/pokemons/pokemons-model'

export interface Pokedex {
  getPokemons: () => Promise<IPokedex>
}
