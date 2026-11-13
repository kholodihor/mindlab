import axios from '@/config/axios'
import { withUploadedFile } from './upload'
import { ITeacherResponse, TeacherFormData } from '@/types/teachers'

export const getTeachers = async () => {
  const response = await axios.get<ITeacherResponse[]>('/teachers')
  return response.data
}

export const createTeacher = (data: TeacherFormData) =>
  withUploadedFile(data.image[0], async ({ fileId, fileUrl }) => {
    const response = await axios.post<ITeacherResponse>('/teachers', {
      ...data,
      imageId: fileId,
      imageUrl: fileUrl
    })
    return response.data
  })

export const updateTeacher = async (id: string, data: TeacherFormData) => {
  const patch = async (body: object) => {
    const response = await axios.patch<ITeacherResponse>(`/teachers/${id}`, body)
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

export const deleteTeacher = async (id: string) => {
  const response = await axios.delete(`/teachers/${id}`)
  return response.data
}
