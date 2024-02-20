import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as teachersApi from '@/utils/api/teachers'
import { TTeacher, TTeacherResponse } from '@/types/teachers'

export const useTeachers = () => {
  const { data, error, isLoading, mutate } = useSWR<TTeacherResponse[], AxiosError>(
    '/testimonials',
    teachersApi.getTeachers,
    {}
  )

  const addTeacher = async (item: TTeacher) => {
    try {
      const newTestimonial = await teachersApi.createTeacher(item)
      if (newTestimonial && data) {
        mutate([newTestimonial, ...data])
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
