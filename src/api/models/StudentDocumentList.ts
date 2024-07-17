import type { StudentDocument } from '@/api/models/StudentDocument'

export interface StudentDocumentList {
  data: Array<StudentDocument>
  offset: number
  limit: number
}
