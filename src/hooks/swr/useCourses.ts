import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as coursesApi from '@/utils/api/courses'
import { ICourse, ICourseResponse } from '@/types/courses'

export const useCourses = () => {
  const { data, error, isLoading, mutate } = useSWR<ICourseResponse[], AxiosError>(
    '/courses',
    coursesApi.getCourses,
    {}
  )

  const addTeacher = async (item: ICourse) => {
    try {
      const newCourse = await coursesApi.createCourse(item)
      if (newCourse && data) {
        mutate([newCourse, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    courses: data,
    isLoading,
    isError: error,
    addTeacher
  }
}
