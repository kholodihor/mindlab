'use server'

import axios from 'axios'

type Testimonial = {
  id: string
  name: string
  content: string
}

export const getTestimonials = async () => {
  const response = await axios.get<Testimonial[]>('/api/testimonials')
  return response
}
