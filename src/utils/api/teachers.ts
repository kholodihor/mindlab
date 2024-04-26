import axios from '@/config/axios'
import { UploadResponse } from '@/types'
import { ITeacherResponse, TeacherFormData } from '@/types/teachers'

export const getTeachers = async () => {
  try {
    const response = await axios.get('/teachers')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getTeacherById = async (id: string) => {
  try {
    const response = await axios.get(`/teachers/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createTeacher = async (teacherData: TeacherFormData) => {
  try {
    const formData = new FormData()
    formData.append('file', teacherData.image[0])
    const res: UploadResponse = await axios.post('/upload', formData)
    const newTeacher = { ...teacherData, imageId: res.data.fileId, imageUrl: res.data.fileUrl }
    const response = await axios.post<ITeacherResponse>('/teachers', newTeacher, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateTeacher = async (id: string, teacherData: TeacherFormData) => {
  try {
    if (teacherData.image[0].size > 0) {
      const formData = new FormData()
      formData.append('file', teacherData.image[0])
      const res: UploadResponse = await axios.post('/upload', formData)
      const updatedTeacher = {
        ...teacherData,
        imageId: res.data.fileId,
        imageUrl: res.data.fileUrl
      }
      const response = await axios.patch<ITeacherResponse>(`/teachers/${id}`, updatedTeacher, {
        headers: { 'Content-Type': 'application/json' }
      })
      return response.data
    }

    const response = await axios.patch<ITeacherResponse>(`/teachers/${id}`, teacherData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteTeacher = async (id: string, imageId: string) => {
  try {
    const response = await axios.delete(`/teachers/${id}`)
    await axios.delete(`/upload/${encodeURIComponent(imageId)}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
