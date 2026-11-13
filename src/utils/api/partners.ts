import axios from '@/config/axios'
import { withUploadedFile } from './upload'
import { IPartnersResponse, PartnersFormData } from '@/types/partners'

export const getPartner = async () => {
  const response = await axios.get<IPartnersResponse[]>('/partners')
  return response.data
}

export const createPartner = (data: PartnersFormData) =>
  withUploadedFile(data.image[0], async ({ fileId, fileUrl }) => {
    const response = await axios.post<IPartnersResponse>('/partners', {
      ...data,
      imageId: fileId,
      imageUrl: fileUrl
    })
    return response.data
  })

export const updatePartner = async (id: string, data: PartnersFormData) => {
  const patch = async (body: object) => {
    const response = await axios.patch<IPartnersResponse>(`/partners/${id}`, body)
    return response.data
  }

  // A zero-size placeholder file means the image wasn't changed
  if (data.image[0].size > 0) {
    return withUploadedFile(data.image[0], ({ fileId, fileUrl }) =>
      patch({ ...data, imageId: fileId, imageUrl: fileUrl })
    )
  }
  return patch(data)
}

export const deletePartner = async (id: string) => {
  const response = await axios.delete(`/partners/${id}`)
  return response.data
}
