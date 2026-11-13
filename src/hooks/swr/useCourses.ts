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

  const getCourseById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: ICourseResponse) => item.id === id)
    }
  }

  const addCourse = async (item: ICourse) => {
    const newCourse = await coursesApi.createCourse(item)
    mutate((current) => [newCourse, ...(current ?? [])], { revalidate: false })
  }

  const updateCourse = async (item: ICourse, courseId: string) => {
    await coursesApi.updateCourse(item, courseId)
    await mutate()
  }

  const deleteCourse = async (id: string) => {
    await coursesApi.deleteCourse(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
  }

  return {
    courses: data,
    isLoading,
    isError: error,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
  }
}
