import { HTTPClient } from '@/api/HTTPClient'
import { HTTPMethod } from '@/api/HTTPMethod'
import type { StudentDocument } from '@/api/models/StudentDocument'
import type { StudentDocumentList } from '@/api/models/StudentDocumentList'

const client = new HTTPClient(
  'https://09a071ee-da81-4e24-8e7e-5c58ac2d7b8f.mock.pstmn.io/documents'
)

export const useStudentDocuments = () => {
  const getDocuments = async (): Promise<StudentDocument[]> => {
    const { data } = await client.fetch<StudentDocumentList>({
      method: HTTPMethod.GET
    })
    return data
  }
  return {
    getDocuments
  }
}
