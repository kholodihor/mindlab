import axios from '@/config/axios'
import { ICourse, ICourseResponse } from '@/types/courses'

export const getCourses = async () => {
  const response = await axios.get('/courses')
  return response.data
}

export const getCourseById = async (id: string) => {
  const response = await axios.get(`/courses/${id}`)
  return response.data
}

export const createCourse = async (course: ICourse) => {
  const response = await axios.post<ICourseResponse>('/courses', course, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}

export const updateCourse = async (courseData: ICourse, id: string) => {
  const response = await axios.patch<ICourseResponse>(`/courses/${id}`, courseData, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}

export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`/courses/${id}`)
  return response.data
}
