import useSWR from 'swr'
import { AxiosError } from 'axios'
import * as testimonialsApi from '@/utils/api/testimonials'
import { TTestimonial, TTestimonialResponse } from '@/types/testimonials'

export const useTestimonials = () => {
  const { data, error, isLoading, mutate } = useSWR<TTestimonialResponse[], AxiosError>(
    '/testimonials',
    testimonialsApi.getTestimonial,
    {}
  )

  const addNewTestimonial = async (item: TTestimonial) => {
    try {
      const response = await testimonialsApi.createTestimonial(item)
      if (response && data) {
        mutate([response.data, ...data])
      }
      return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  const getTestimonialById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: TTestimonialResponse) => item.id === id)
    }
  }

  const deleteTestimonial = async (id: string) => {
    try {
      const updatedTestimonial = data?.filter((item) => item.id !== id)
      mutate(updatedTestimonial)
    const response =   await testimonialsApi.deleteTestimonial(id)
    return response
    } catch (error) {
      throw Promise.reject()
    }
  }

  const updateTestimonial = async (item: TTestimonial, testimonialId: string) => {
    try {
      const updatedTestimonial = await testimonialsApi.updateTestimonial(item, testimonialId)
      if (updatedTestimonial && data) {
        mutate()
      }
      return updatedTestimonial
    } catch (error) {
      throw Promise.reject()
    }
  }


  return {
    testimonials: data,
    isLoading,
    isError: error,
    addNewTestimonial,
    deleteTestimonial,
    getTestimonialById,
    updateTestimonial
  }
}
