import axios from '@/config/axios'
import { UploadResponse } from '@/types'
import { ITeacher, ITeacherResponse } from '@/types/teachers'

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

export const createTeacher = async (file: File | Blob, teacherData: ITeacher) => {
  try {
    const res: UploadResponse = await axios.post('/upload', file)
    const newTeacher = { ...teacherData, imageId: res.imageId, imageUrl: res.imageUrl }
    const response = await axios.post<ITeacherResponse>('/teachers', newTeacher, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateTeacher = async (id: string, teacherData: ITeacher, file?: File | Blob) => {
  try {
    if (!file) {
      const response = await axios.patch<ITeacherResponse>(`/teachers/${id}`, teacherData, {
        headers: { 'Content-Type': 'application/json' }
      })
      return response.data
    }
    const res: UploadResponse = await axios.post('/upload', file)
    const updatedTeacher = { ...teacherData, imageId: res.imageId, imageUrl: res.imageUrl }
    const response = await axios.patch<ITeacherResponse>(`/teachers/${id}`, updatedTeacher, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteTeacher = async (id: string) => {
  try {
    const response = await axios.delete(`/teachers/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
