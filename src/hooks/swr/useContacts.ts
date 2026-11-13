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

  const updateContact = async (id: string, item: ContactFormData) => {
    await contactsApi.updateContact(id, item)
    await mutate()
  }

  const deleteContact = async (id: string, name: string, item: IContact) => {
    await contactsApi.deleteContact(id, name, item)
    mutate()
  }

  return {
    contacts: data,
    getContactById,
    isLoading,
    isError: error,
    updateContact,
    deleteContact
  }
}
