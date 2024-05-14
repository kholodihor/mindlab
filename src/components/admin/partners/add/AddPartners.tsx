'use client'
import { usePartners } from '@/hooks/swr/usePartners'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormFields, PartnersValidation } from '../validationSchems'
// import { defaultValue } from './defaultValue'
import { defaultValue } from './defaultValue'
import FileInput from '../../shared/fileInput/FileInput'
import css from './AddPartner.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ColorInput from '../../shared/colorInput/ColorInput'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Image from 'next/image'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Loader from '../../shared/loader/Loader'

const AddPartners = () => {
  const { addPartner, isLoading } = usePartners()
  const [image, setImage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const {
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors, isDirty, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(PartnersValidation),
    mode: 'onChange',
    defaultValues: defaultValue
  })
  const colorList = ['#E6EAFF', '#AAAEDF', '#8D83FF', '#FED1CE', '#FFECD0']

  const currentValues = watch()

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  }

  useEffect(() => {
    if (!currentValues.image?.length) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data)

   
      setIsProcessing(true)
   const response =  await addPartner(data)
      setIsProcessing(false)
      if(response){
        Swal.fire({
          title: 'Курс успішно додано',
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/admin')
          }
        })
      } else {
        Swal.fire({
          title: 'Щось пішло не так. Спробуйту знову',
          icon: 'error'
        })
      }
   
    }
  return (
    <div>
      <PageTitle
        title="Додавання партнера"
        isAddButtonDisplayed={false}
        isSettingsButtonDisplayed={false}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.container}>
          <div className={`${css.wrapper} ${css.wrapper__logo}`}>
            <div className={css.thumb}>
              <p className={css.title}>Завантажте логотип партнера</p>
              <p className={css.urlLogo}>{image}</p>
            </div>
            <FileInput
              name="image"
              control={control}
              accept="image/*"
              placeholder="Завантажити з комп’ютера"
            />
          </div>
          <div className={`${css.wrapper} ${css.wrapper__namePartner}`}>
            <Controller
              name="nameUa"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Введіть назву партнера:"
                  placeholder="Назва"
                  errorText={errors.nameUa?.message && errors.nameUa?.message}
                />
              )}
            />
            <Controller
              name="nameEn"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Назва партнера англійською:"
                  placeholder="Назва"
                  errorText={errors.nameEn?.message && errors.nameEn?.message}
                />
              )}
            />
          </div>
          <div className={`${css.wrapper} ${css.wrapper__color}`}>
            <Controller
              name="websiteLink"
              control={control}
              render={({ field }) => (
                <Admin_TextInput
                  {...field}
                  title="Введіть посилання на сайт партнера:"
                  placeholder="Посилання на сайт"
                  errorText={errors.websiteLink?.message && errors.websiteLink?.message}
                />
              )}
            />
            <Controller
              name="color"
              control={control}
              render={({ field }) => (
                <ColorInput
                  {...field}
                  title="Оберіть колір тла:"
                  colorList={colorList}
                  errorText={errors.color?.message && errors.color?.message}
                />
              )}
            />
          </div>
          <div className={css.wrapper__description}>
            <Controller
              name="descriptionUa"
              control={control}
              render={({ field }) => (
                <Admin_TextArea
                  {...field}
                  title="Введіть опис (max 500 символів):"
                  placeholder="Опис"
                  errorText={errors.descriptionUa?.message && errors.descriptionUa?.message}
                />
              )}
            />
            <Controller
              name="descriptionEn"
              control={control}
              render={({ field }) => (
                <Admin_TextArea
                  {...field}
                  title="Введіть опис англійською (max 500 символів):"
                  placeholder="Опис"
                  errorText={errors.descriptionEn?.message && errors.descriptionEn?.message}
                />
              )}
            />
          </div>
          <div className={css.wrapper}>
            <p className={css.title}>Превью</p>
            <Image
              src={'/svg/admin/preview.svg'}
              width={277}
              height={264}
              alt="icon"
              className={css.icon}
            />
            <div
              className={css.preview__wrapper}
              style={{ backgroundColor: getValues('color') || '' }}
            >
              {image !== '' ? (
                <Image
                  src={image}
                  width={150}
                  height={170}
                  alt={'logo'}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className={css.btt__form}>
          <ResetButton text="Скасувати" />
          <SubmitButton text="Додати партнера" disabled={!isDirty || !isValid} />
        </div>
      </form>
      {(isProcessing || isLoading) && <Loader />}
    </div>
  )
}

export default AddPartners
