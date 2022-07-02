import { HttpClient, HttpStatusCode } from '@data/protocols/http'
import { UnexpectedError } from '@domain/errors'
import { Pokedex } from '@domain/usecases/Pokedex/pokedex'

export class RemotePokedex implements Pokedex {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<Pokedex.Model>
  ) {}

  async getPokemons (): Promise<Pokedex.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    if (!httpResponse || httpResponse.statusCode !== HttpStatusCode.OK) {
      throw new UnexpectedError()
    }

    return httpResponse.data
  }
}
