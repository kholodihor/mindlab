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
    const response = await testimonialsApi.createTestimonial(item)
    // New testimonials are unpublished; refetch instead of showing it before moderation
    mutate()
    return response
  }

  const getTestimonialById = (id: string) => {
    if (Array.isArray(data) && data.length) {
      return data?.find((item: TTestimonialResponse) => item.id === id)
    }
  }

  const deleteTestimonial = async (id: string) => {
    const response = await testimonialsApi.deleteTestimonial(id)
    mutate((current) => current?.filter((item) => item.id !== id), { revalidate: false })
    return response
  }

  const updateTestimonial = async (item: TTestimonial, testimonialId: string) => {
    const updatedTestimonial = await testimonialsApi.updateTestimonial(item, testimonialId)
    await mutate()
    return updatedTestimonial
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
