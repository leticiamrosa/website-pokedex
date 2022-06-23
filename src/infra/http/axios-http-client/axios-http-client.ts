import { HttpGetParams, HttpResponse, HttpGetClient } from '@data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpGetClient<any> {
  async get (params: HttpGetParams): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>

    try {
      httpResponse = await axios.get(params.url)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      data: httpResponse.data
    }
  }
}
