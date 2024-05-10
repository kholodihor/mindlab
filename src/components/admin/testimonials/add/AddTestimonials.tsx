'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { addTestimonialsValidation } from './validationSchema';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';
import Swal from 'sweetalert2'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput';
import ColorInput from '../../shared/colorInput/ColorInput';
import css from './AddTestimonials.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle';
import ResetButton from '../../shared/resetButton/ResetButton';
import SubmitButton from '../../shared/submitButton/SubmitButton';
import { defaultValue } from './defaultValue';
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea';
import { useTestimonials } from '@/hooks/swr/useTestimonials';
import { useRouter } from 'next/navigation';
import Loader from '../../shared/loader/Loader';

const AddTestimonials = ()=> {
    const colorList = ['#AAAEDF', '#8D83FF', '#2928E3', '#03AA89', '#FED1CE', '#FFECD0']
    const {addNewTestimonial, isLoading, isError} = useTestimonials();
    const [isProcessing, setIsProcessing] = useState(false)
    const router = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty, isValid }
      } = useForm<z.infer<typeof addTestimonialsValidation>>({
        resolver: zodResolver(addTestimonialsValidation),
        mode: 'onChange',
        defaultValues: defaultValue
      })

      const onSubmit: SubmitHandler<z.infer<typeof addTestimonialsValidation>> = async (
        data: z.infer<typeof addTestimonialsValidation>
      ) => {
        console.log(data)
       
      setIsProcessing(true)
      await addNewTestimonial(data)
      setIsProcessing(false)
      if(isError) {
        Swal.fire({
            title: 'Щось пішдо не так. Спробуйту знову',
            icon: 'error'
          })
          return
      }
        Swal.fire({
          title: 'Відгук успішно додано',
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            // router.push('/admin/testimonials')
          }
        })
      }
    return (
        <div>
    <PageTitle title='Додавання Відгуку' isAddButtonDisplayed={false} isSettingsButtonDisplayed={false}/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.form}>
            <div className={css.leftPart}>
              <Controller
                name="nameUa"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Введіть ім’я користувача:"
                    errorText={errors.nameUa?.message && errors.nameUa?.message}
                    placeholder="Iм’я"
                  />
                )}
              />
               <Controller
                name="nameEn"
                control={control}
                render={({ field }) => (
                  <Admin_TextInput
                    {...field}
                    title="Ім’я користувача англійською:"
                    errorText={errors.nameEn?.message && errors.nameEn?.message}
                    placeholder="Iм’я"
                  />
                )}
              />
               <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <ColorInput
                    {...field}
                    title="Оберіть колір аватарки:"
                    colorList={colorList}
                    errorText={errors.color?.message && errors.color?.message}
                  />
                )}
              />
              </div>
              <div className={css.rightPart}>
              <Controller
                name="messageUa"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть відгук (max 350 символів):"
                    errorText={errors.messageUa?.message && errors.messageUa?.message}
                    placeholder='Відгук'
                  />
                )}
              />
               <Controller
                name="messageEn"
                control={control}
                render={({ field }) => (
                  <Admin_TextArea
                    {...field}
                    title="Введіть відгук англійською (max 350 символів):"
                    errorText={errors.messageEn?.message && errors.messageEn?.message}
                    placeholder='Відгук'
                  />
                )}
              />
              </div>
          </div>
          <div className={css.btt__form}>
            <ResetButton text='Скасувати' />
            <SubmitButton text='Додати відгук'  disabled={!isDirty || !isValid} />
          </div>
        </form>
        {(isLoading || isProcessing) && <Loader />}
    </div>
    )
};

 export default AddTestimonials;