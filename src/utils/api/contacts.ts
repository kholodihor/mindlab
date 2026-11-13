import axios from '@/config/axios'
import { IContact, ContactFormData } from '@/types/contacts'

export const getContacts = async () => {
  const response = await axios.get<IContact[]>('/contacts')
  return response.data
}

export const updateContact = async (id: string, contactData: ContactFormData) => {
  const response = await axios.patch<IContact>(`/contacts/${id}`, contactData, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}

export const deleteContact = async (id: string, name: string, data: IContact) => {
  const response = await axios.patch(`/contacts/${id}/${name}`, data, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}
