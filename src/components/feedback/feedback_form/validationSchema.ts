import { z } from 'zod'


export const feedbackValidation = z.object({
  name: z
    .string()
    .nonempty('Errors.mustbe')
    .min(2, 'Errors.minName')
    .max(25, 'Errors.maxName'),

  email: z
    .string()
    .nonempty('Errors.mustbe')
    .min(2, 'Errors.minEmail')
    .max(55, 'Errors.maxEmail')
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
    .nonempty('Errors.mustbe')
    .min(2, 'Errors.minQuestion')
    .max(300, 'Errors.maxQuestion')
})
