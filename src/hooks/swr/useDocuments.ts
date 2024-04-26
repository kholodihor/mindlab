import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as documentsApi from '@/utils/api/documents'
import { IDocument, DocumentFormData } from '@/types/documents'

export const useDocuments = () => {
  const { data, error, isLoading, mutate } = useSWR<IDocument[], AxiosError>(
    '/documents',
    documentsApi.getDocuments,
    {}
  )

  const addDocument = async (item: DocumentFormData) => {
    try {
      const newDocument = await documentsApi.createDocument(item)
      if (newDocument && data) {
        mutate([newDocument, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteDocument = async (id: string, fileId: string) => {
    try {
      await documentsApi.deleteDocument(id, fileId)
      const updatedDocuments = data?.filter((item) => item.id !== id)
      mutate(updatedDocuments)
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    documents: data,
    isLoading,
    isError: error,
    addDocument,
    deleteDocument
  }
}
