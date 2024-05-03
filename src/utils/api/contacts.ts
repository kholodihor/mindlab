import axios from '@/config/axios'
import { UploadResponse } from '@/types'
import { IContact, ContactFormData } from '@/types/contacts'

export const getContacts = async () => {
  try {
    const response = await axios.get<IContact[]>('/contacts')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getContactByName = async (name: string) => {
  try {
    const response = await axios.get<IContact>(`/contatcs/${name}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getContactById = async (id: string) => {
  try {
    const response = await axios.get<IContact>(`/contatcs/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateContact = async (id: string, contactData: ContactFormData) => {
  try {
    if (contactData) {
      const formData = new FormData()
      const res: UploadResponse = await axios.post('/upload', formData)
      const updatedContact = {
        ...contactData,
      }
      const response = await axios.patch<IContact>(`/contacts/${id}`, updatedContact, {
        headers: { 'Content-Type': 'application/json' }
      })
      return response.data
    }

    const response = await axios.patch<IContact>(`/teachers/${id}`, contactData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteContact = async (id: string) => {
  try {
    const response = await axios.delete(`/contacts/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

