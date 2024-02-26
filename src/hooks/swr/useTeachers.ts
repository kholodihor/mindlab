import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as teachersApi from '@/utils/api/teachers'
import { ITeacher, ITeacherResponse } from '@/types/teachers'

export const useTeachers = () => {
  const { data, error, isLoading, mutate } = useSWR<ITeacherResponse[], AxiosError>(
    '/teachers',
    teachersApi.getTeachers,
    {}
  )

  const addTeacher = async (item: ITeacher) => {
    try {
      const newTeacher = await teachersApi.createTeacher(item)
      console.log(newTeacher)
      if (newTeacher && data) {
        mutate([newTeacher, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    teachers: data,
    isLoading,
    isError: error,
    addTeacher
  }
}
