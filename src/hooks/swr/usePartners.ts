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
    const newPartner = await partnersApi.createPartner(item)
    mutate((current) => [newPartner, ...(current ?? [])], { revalidate: false })
    return newPartner
  }

  const updatePartner = async (partnerId: string, item: PartnersFormData) => {
    const updatedPartners = await partnersApi.updatePartner(partnerId, item)
    await mutate()
    return updatedPartners
  }

  const deletePartner = async (id: string) => {
    const response = await partnersApi.deletePartner(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
    return response
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
