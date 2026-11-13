import axios from '@/config/axios'
import { TTestimonial, TTestimonialResponse } from '@/types/testimonials'

export const getTestimonial = async () => {
  const response = await axios.get('/testimonials')
  return response.data
}

export const createTestimonial = async (testimonial: TTestimonial) => {
  const response = await axios.post<TTestimonialResponse>('/testimonials', testimonial, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response
}

export const deleteTestimonial = async (id: string) => {
  const response = await axios.delete(`/testimonials/${id}`)
  return response.data
}

export const updateTestimonial = async (testimonialData: TTestimonial, id: string) => {
  const response = await axios.patch<TTestimonialResponse>(`/testimonials/${id}`, testimonialData, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response.data
}
