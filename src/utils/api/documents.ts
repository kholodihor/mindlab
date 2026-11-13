import axios from '@/config/axios'
import { withUploadedFile } from './upload'
import { IDocument, DocumentFormData } from '@/types/documents'

export const getDocuments = async () => {
  const response = await axios.get('/documents')
  return response.data
}

export const createDocument = (data: DocumentFormData) =>
  withUploadedFile(data.file[0], async ({ fileId, fileUrl }) => {
    const response = await axios.post<IDocument>('/documents', { ...data, fileId, fileUrl })
    return response.data
  })

export const deleteDocument = async (id: string) => {
  const response = await axios.delete(`/documents/${id}`)
  return response.data
}
