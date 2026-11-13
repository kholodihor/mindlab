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
    const newTeacher = await teachersApi.createTeacher(item)
    mutate((current) => [newTeacher, ...(current ?? [])], { revalidate: false })
  }

  const updateTeacher = async (courseId: string, item: TeacherFormData) => {
    await teachersApi.updateTeacher(courseId, item)
    await mutate()
  }

  const deleteTeacher = async (id: string) => {
    await teachersApi.deleteTeacher(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
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
