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

  const getTeacherById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: ITeacherResponse) => item.id === id)
    }
  }

  const addTeacher = async (file: File | Blob, item: ITeacher) => {
    try {
      const newTeacher = await teachersApi.createTeacher(file, item)
      if (newTeacher && data) {
        mutate([newTeacher, ...data])
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updateTeacher = async (courseId: string, item: ITeacher, file?: File | Blob) => {
    try {
      const updatedTeacher = await teachersApi.updateTeacher(courseId, item, file)
      if (updatedTeacher && data) {
        mutate()
      }
    } catch (error) {
      throw Promise.reject()
    }
  }

  const deleteTeacher = async (id: string) => {
    try {
      await teachersApi.deleteTeacher(id)
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
