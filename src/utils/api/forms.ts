'use client'

import axios from '@/config/axios'
import { IForm, IFormResponse } from '@/types/forms'

export const getForms = async () => {
  const response = await axios.get('/forms')
  return response.data
}

export const createForm = async (formData: IForm) => {
  const response = await axios.post<IFormResponse>('/forms', formData, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response
}

export const updateForm = async (id: string, formData: IForm) => {
  const response = await axios.patch<IFormResponse>(`/forms/${id}`, formData, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response
}

export const deleteForm = async (id: string) => {
  const response = await axios.delete(`/forms/${id}`)
  return response.data
}
