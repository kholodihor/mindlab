export type TTestimonial = {
  name: string
  email: string
  message: string
}

export type TTestimonialResponse = TTestimonial & {
  _id: string
  isPublished: boolean
}
