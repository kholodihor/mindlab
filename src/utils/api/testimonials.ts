import axios from '@/config/axios'

export const getTestimonial = async () => {
  try {
    const response = await axios.get('/testimonials')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
