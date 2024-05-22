'use client'

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
    try {
      const newCourse = await coursesApi.createCourse(item)
      if (newCourse && data) {
        mutate([newCourse, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updateCourse = async (item: ICourse, courseId: string) => {
    try {
      const updatedCourse = await coursesApi.updateCourse(item, courseId)
      if (updatedCourse && data) {
        mutate()
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteCourse = async (id: string) => {
    try {
      const updatedCourses = data?.filter((item) => item.id !== id)
      mutate(updatedCourses)
      await coursesApi.deleteCourse(id)
    } catch (error) {
      throw Promise.reject()
    }
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
