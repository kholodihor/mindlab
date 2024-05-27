import { z } from 'zod'

export const testimonialScheme = z.object({
  name: z.string().nonempty('Errors.isname').max(25, 'Errors.maxName'),

  email: z
    .string()
    .nonempty('Errors.ismail')
    .refine(
      (value) =>
        /^[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+@[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+\.[a-zA-Z]{2,}$/.test(
          value
        ),
      {
        message: 'Errors.notCorrectEmail'
      }
    ),

  message: z
    .string()
    .nonempty('Errors.testimonials')
    .min(2, 'Errors.mintestimonial')
    .max(150, 'Errors.maxtestimonial')
})
