import { HTTPClient } from '@/api/HTTPClient'
import { HTTPMethod } from '@/api/HTTPMethod'
import type { StudentDocument } from '@/api/models/StudentDocument'
import type { StudentDocumentList } from '@/api/models/StudentDocumentList'

const client = new HTTPClient(import.meta.env.VITE_APP_URL)

// Usually I use store or smth like a wrapper around raw network requests
// but for test task I decided use composables as incapsulation layer
export const useStudentDocuments = () => {
  const getDocuments = async () => {
    const { data } = await client.fetch<StudentDocumentList>({
      method: HTTPMethod.GET
    })
    return data
  }
  const createDocument = async (body: any) => {
    const data = await client.fetch<StudentDocument>({
      method: HTTPMethod.POST,
      body
    })
    return data
  }
  return {
    getDocuments,
    createDocument
  }
}
