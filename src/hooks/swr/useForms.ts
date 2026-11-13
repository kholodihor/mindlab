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
    const response = await formsApi.createForm(item)
    mutate((current) => [response.data, ...(current ?? [])], { revalidate: false })
    return response
  }

  const updateForm = async (id: string, item: IForm) => {
    const response = await formsApi.updateForm(id, item)
    await mutate()
    return response
  }

  const deleteForm = async (id: string) => {
    const response = await formsApi.deleteForm(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
    return response
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
