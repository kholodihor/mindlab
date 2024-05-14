
import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as partnersApi from '@/utils/api/partners'
import { IPartnersResponse, PartnersFormData } from '@/types/partners'

export const usePartners = () => {
  const { data, isLoading, mutate } = useSWR<IPartnersResponse[], AxiosError>(
    '/partners',
    partnersApi.getPartner,
    {}
  )

  const getPartnerById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: IPartnersResponse) => item.id === id)
    }
  }

  const addPartner = async (item: PartnersFormData) => {
    try {
      const newPartner = await partnersApi.createPartner(item)
      if (newPartner && data) {
        mutate([newPartner, ...data])
      }
      return newPartner
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updatePartner = async (partnerId: string, item: PartnersFormData) => {
    try {
      const updatedPartner = await partnersApi.updatePartner(partnerId, item)
      if (updatedPartner && data) {
        mutate()
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deletePartner = async (id: string, imageId: string) => {
    try {
     const response =  await partnersApi.deletePartner(id, imageId)
      const updatedPartners = data?.filter((item) => item.id !== id)
      mutate(updatedPartners)
      return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    partners: data,
    getPartnerById,
    isLoading,
    addPartner,
    deletePartner,
    updatePartner
  }
}