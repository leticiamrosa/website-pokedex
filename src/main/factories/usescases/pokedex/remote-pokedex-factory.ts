import { makeApiUrl, makeAxiosHttpClient } from '@main/factories/http'
import { RemotePokedex } from '@data/usecases/pokedex/remote-pokedex'
import { Pokedex } from '@domain/usecases/Pokedex/pokedex'

export const makeRemotePokedex = (): Pokedex => {
  return new RemotePokedex(makeApiUrl('/pokemons'), makeAxiosHttpClient())
}
