import axios from '@/config/axios'
import { ICourse, ICourseResponse } from '@/types/courses'

export const getCourses = async () => {
  try {
    const response = await axios.get('/courses')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCourseById = async (id: string) => {
  try {
    const response = await axios.get(`/courses/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createCourse = async (course: ICourse) => {
  try {
    const response = await axios.post<ICourseResponse>('/courses', course, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateCourse = async (courseData: ICourse, id: string) => {
  try {
    const response = await axios.patch<ICourseResponse>(`/courses/${id}`, courseData, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteCourse = async (id: string) => {
  try {
    const response = await axios.delete<ICourseResponse>(`/courses/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
