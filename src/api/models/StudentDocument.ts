import { StudentDocumentStatus } from '@/api/models/StudentDocumentStatus'
import { StudentDocumentType } from '@/api/models/StudentDocumentType'
import { DocumentExtension } from '@/api/models/DocumentExtension'

export interface StudentDocument {
  id: string
  name: string
  type: StudentDocumentType
  status: StudentDocumentStatus | null
  dateStart: string
  dateEnd: string | null
  ext: DocumentExtension
}
