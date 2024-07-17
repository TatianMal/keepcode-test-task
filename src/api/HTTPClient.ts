import type { RequestParams } from '@/api/RequestParams'

export class HTTPClient {
  constructor(private url: string) {}

  async fetch<T>(params: RequestParams): Promise<T> {
    const { method, body } = params
    const headers = {}
    // set content type?
    try {
      const response = await fetch(this.url, {
        method,
        headers: headers,
        body
      })
      if (!response.ok) {
        throw new Error(`Api Error occured: ${method} - ${response.status}`)
      }
      const result = response.json() as T
      return result
    } catch (error) {
      throw new Error('Network Error occured')
    }
  }
}
