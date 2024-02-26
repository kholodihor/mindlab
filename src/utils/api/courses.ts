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
