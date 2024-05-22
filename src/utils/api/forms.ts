import axios from '@/config/axios'
import { IForm, IFormResponse } from '@/types/forms'

export const getForms = async () => {
  try {
    const response = await axios.get('/forms')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createForm = async (formData: IForm) => {
  try {
    const response = await axios.post<IFormResponse>('/forms', formData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const updateForm = async (id: string, formData: IForm) => {
  try {
    const response = await axios.patch<IFormResponse>(`/forms/${id}`, formData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const deleteForm = async (id: string) => {
  try {
    const response = await axios.delete(`/forms/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
