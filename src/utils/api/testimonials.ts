import axios from '@/config/axios'
import { TTestimonial, TTestimonialResponse } from '@/types/testimonials'

export const getTestimonial = async () => {
  try {
    const response = await axios.get('/testimonials')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createTestimonial = async (testimonial: TTestimonial) => {
  try {
    const response = await axios.post<TTestimonialResponse>('/testimonials', testimonial, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getTestimonialById = async (id: string) => {
  try {
    const response = await axios.get(`/testimonials/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteTestimonial = async (id: string) => {
  try {
    const response = await axios.delete(`/testimonials/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateTestimonial = async (testimonialData: TTestimonial, id: string) => {
  try {
    const response = await axios.patch<TTestimonialResponse>(
      `/testimonials/${id}`,
      testimonialData,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
