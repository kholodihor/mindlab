import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as formsApi from '@/utils/api/forms'
import { IForm, IFormResponse } from '@/types/forms'

export const useForms = () => {
  const { data, error, isLoading, mutate } = useSWR<IFormResponse[], AxiosError>(
    '/forms',
    formsApi.getForms,
    {}
  )

  const getFormById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: IFormResponse) => item.id === id)
    }
  }

  const addForm = async (item: IForm) => {
    try {
      const response = await formsApi.createForm(item)
      if (response && data) {
        mutate([response.data, ...data])
      }
      return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updateForm = async (id: string, item: IForm) => {
    try {
      const response = await formsApi.updateForm(id, item)
      if (response && data) {
        mutate()
      }
      return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteForm = async (id: string) => {
    try {
      const response = await formsApi.deleteForm(id)
      const updatedDocuments = data?.filter((item) => item.id !== id)
      mutate(updatedDocuments)
      return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    forms: data,
    isLoading,
    isError: error,
    addForm,
    getFormById,
    updateForm,
    deleteForm
  }
}
