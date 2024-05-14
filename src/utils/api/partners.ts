import axios from '@/config/axios'
import { UploadResponse } from '@/types'
import { IPartnersResponse, PartnersFormData } from '@/types/partners'

export const getPartner = async () => {
  try {
    const response = await axios.get<IPartnersResponse[]>('/partners')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getPartnerById = async (id: string) => {
  try {
    const response = await axios.get<IPartnersResponse>(`/partners/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createPartner = async (partnerData: PartnersFormData) => {
  try {
    const formData = new FormData()
    formData.append('file', partnerData.image[0])
    const res: UploadResponse = await axios.post('/upload', formData)
    const newPartner = { ...partnerData, imageId: res.data.fileId, imageUrl: res.data.fileUrl }
    const response = await axios.post<IPartnersResponse>('/partners', newPartner, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updatePartner = async (id: string, partnerData: PartnersFormData) => {
  try {
    if (partnerData.image[0].size > 0) {
      const formData = new FormData()
      formData.append('file', partnerData.image[0])
      const res: UploadResponse = await axios.post('/upload', formData)
      const updatedPartner = {
        ...partnerData,
        imageId: res.data.fileId,
        imageUrl: res.data.fileUrl
      }
      const response = await axios.patch<IPartnersResponse>(`/partners/${id}`, updatedPartner, {
        headers: { 'Content-Type': 'application/json' }
      })
      return response.data
    }

    const response = await axios.patch<IPartnersResponse>(`/partners/${id}`, partnerData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deletePartner = async (id: string, imageId: string) => {
  try {
    const response = await axios.delete(`/partners/${id}`)
    await axios.delete(`/upload/${encodeURIComponent(imageId)}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}