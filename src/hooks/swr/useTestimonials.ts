import useSwr from 'swr'
import * as testimonialsApi from '@/utils/api/testimonials'

export const useTestimonials = () => {
  return {
    GetTestimonials: () =>
      useSwr('allTestimonials', async () => {
        const response = await testimonialsApi.getTestimonial()
        console.log(response)
        return response
      })
  }
}
