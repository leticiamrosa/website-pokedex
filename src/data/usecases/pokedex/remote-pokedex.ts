import { HttpGetClient, HttpStatusCode } from '@data/protocols/http'
import { UnexpectedError } from '@domain/errors'
import { Pokedex } from '@domain/usecases/Pokedex/pokedex'
import { IPokedex } from '@domain/models/pokemons/pokemons-model'

export class RemotePokedex implements Pokedex {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<IPokedex>
  ) {}

  async getPokemons (): Promise<IPokedex> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url
    })

    const isError = !httpResponse || httpResponse.statusCode !== HttpStatusCode.ok

    if (isError) {
      throw new UnexpectedError()
    }

    return httpResponse.data
  }
}
