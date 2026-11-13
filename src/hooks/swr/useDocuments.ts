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
    const newDocument = await documentsApi.createDocument(item)
    mutate((current) => [newDocument, ...(current ?? [])], { revalidate: false })
  }

  const deleteDocument = async (id: string) => {
    await documentsApi.deleteDocument(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
  }

  return {
    documents: data,
    isLoading,
    isError: error,
    addDocument,
    deleteDocument
  }
}
