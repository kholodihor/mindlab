import axios from '@/config/axios'
import { UploadResponse } from '@/types'
import { IDocument, DocumentFormData } from '@/types/documents'

export const getDocuments = async () => {
  try {
    const response = await axios.get('/documents')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createDocument = async (documentData: DocumentFormData) => {
  try {
    const formData = new FormData()
    formData.append('file', documentData.file[0])
    const res: UploadResponse = await axios.post('/upload', formData)
    const newDocument = { ...documentData, fileId: res.data.fileId, fileUrl: res.data.fileUrl }
    const response = await axios.post<IDocument>('/documents', newDocument, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteDocument = async (id: string, fileId: string) => {
  try {
    const response = await axios.delete(`/documents/${id}`)
    await axios.delete(`/upload/${encodeURIComponent(fileId)}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
