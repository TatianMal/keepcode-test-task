import { HTTPMethod } from '@/api/HTTPMethod'

export interface RequestParams {
  method: HTTPMethod
  body?: any
}
