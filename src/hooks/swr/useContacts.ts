import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as contactsApi from '@/utils/api/contacts'
import { IContact, ContactFormData } from '@/types/contacts'

export const useContacts = () => {
  const { data, error, isLoading, mutate } = useSWR<IContact[], AxiosError>(
    '/contacts',
    contactsApi.getContacts,
    {}
  )

  const getContactById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: IContact) => item.id === id)
    }
  }

  const getContactByName = (name: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: IContact) => item.name === name)
    }
  }

  const updateContact = async (courseId: string, item: ContactFormData) => {
    try {
      const updatedContact = await contactsApi.updateContact(courseId, item)
      if (updatedContact && data) {
        mutate()
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteContact = async (id: string) => {
    try {
      await contactsApi.deleteContact(id)
      const updatedContacts = data?.filter((item) => item.id !== id)
      mutate(updatedContacts)
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    contacts: data,
    getContactById,
    getContactByName,
    isLoading,
    isError: error,
    updateContact,
    deleteContact
  }
}
