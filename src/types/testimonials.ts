export type TTestimonial = {
  name?: string
  email?: string
  message?: string
}

export type TTestimonialResponse = TTestimonial & {
  id: string
  isPublished: boolean
}