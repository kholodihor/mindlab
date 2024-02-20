import axios from '@/config/axios'
import { TTeacher, TTeacherResponse } from '@/types/teachers'

export const getTeachers = async () => {
  try {
    const response = await axios.get('/teachers')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createTeacher = async (teacher: TTeacher) => {
  try {
    const response = await axios.post<TTeacherResponse>('/teachers', teacher, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
