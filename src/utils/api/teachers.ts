import axios from '@/config/axios'
import { ITeacher, ITeacherResponse } from '@/types/teachers'

export const getTeachers = async () => {
  try {
    const response = await axios.get('/teachers')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createTeacher = async (teacher: ITeacher) => {
  try {
    const response = await axios.post<ITeacherResponse>('/teachers', teacher, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
