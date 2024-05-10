import { TTestimonialResponse } from "@/types/testimonials"

export const defaultValue = (data: TTestimonialResponse)=> {
return {
    name: data ? data.name :'',
    message: data ? data.message : '',
    email: data ? data.email : '',
}
}