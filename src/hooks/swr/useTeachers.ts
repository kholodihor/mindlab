import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as teachersApi from '@/utils/api/teachers'
import { ITeacherResponse, TeacherFormData } from '@/types/teachers'

export const useTeachers = () => {
  const { data, error, isLoading, mutate } = useSWR<ITeacherResponse[], AxiosError>(
    '/teachers',
    teachersApi.getTeachers,
    {}
  )

  const getTeacherById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: ITeacherResponse) => item.id === id)
    }
  }

  const addTeacher = async (item: TeacherFormData) => {
    try {
      const newTeacher = await teachersApi.createTeacher(item)
      if (newTeacher && data) {
        mutate([newTeacher, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updateTeacher = async (courseId: string, item: TeacherFormData) => {
    try {
      const updatedTeacher = await teachersApi.updateTeacher(courseId, item)
      if (updatedTeacher && data) {
        mutate()
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteTeacher = async (id: string, imageId: string) => {
    try {
      await teachersApi.deleteTeacher(id, imageId)
      const updatedTeachers = data?.filter((item) => item.id !== id)
      mutate(updatedTeachers)
    } catch (error) {
      throw Promise.reject()
    }
  }

  return {
    teachers: data,
    getTeacherById,
    isLoading,
    isError: error,
    addTeacher,
    updateTeacher,
    deleteTeacher
  }
}
