'use client'
import { usePartners } from '@/hooks/swr/usePartners'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormFields, PartnersValidation } from '../validationSchems'
import { defaultValue } from '../add/defaultValue'
import FileInput from '../../shared/fileInput/FileInput'
import css from '../add/AddPartner.module.css'
import PageTitle from '../../shared/pageTitle/PageTitle'
import Admin_TextInput from '../../ui/admin_inputs/text_input/Admin_TextInput'
import ColorInput from '../../shared/colorInput/ColorInput'
import Admin_TextArea from '../../ui/admin_inputs/text_area/Admin_TextArea'
import Image from 'next/image'
import ResetButton from '../../shared/resetButton/ResetButton'
import SubmitButton from '../../shared/submitButton/SubmitButton'
import Loader from '../../shared/loader/Loader'

const EditPartners = ({ id }: { id: string }) => {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const { getPartnerById, updatePartner, isLoading, } = usePartners()

  const colorList= ['#E6EAFF', '#AAAEDF', '#8D83FF', '#FED1CE', '#FFECD0']

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: zodResolver(PartnersValidation),
    defaultValues: defaultValue,
    mode: 'onChange'
  })

  const [image, setImage] = useState('')

  useEffect(() => {
    const patrnerData = getPartnerById(id)
   

    if (patrnerData) {
      setValue('nameUa', patrnerData.nameUa)
      setValue('nameEn', patrnerData.nameEn)
      setValue('color', patrnerData.color)
      setValue('descriptionUa', patrnerData.descriptionUa)
      setValue('descriptionEn', patrnerData.descriptionEn)
      setValue('websiteLink', patrnerData.websiteLink)
      setValue('image', [new File([], patrnerData?.imageUrl, { type: 'for-url' })])
      setImage(patrnerData?.imageUrl)
    }
    console.log(image)
  }, [id])

  const currentValues = watch()
  console.log(currentValues)

  const setImagePreview = (file: File) => {
    const img = URL.createObjectURL(file)
    setImage(img)
  }

  useEffect(() => {
    if (!currentValues.image[0]?.size) return
    const file = currentValues.image[0]
    setImagePreview(file)
  }, [currentValues.image])

  const onSubmit: SubmitHandler<FormFields> = async (data) => {

    setIsProcessing(true)
   await updatePartner(id, data)
  
    setIsProcessing(false)
    Swal.fire({
      title: 'Дані успішно оновленні',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/admin/partners')
      }
    })
  }

  return (
    <div>
      <PageTitle
        title="Редагування партнера"
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
                  placeholder="Name"
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
                  maxCharQuantity="500"
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
                  placeholder="Description"
                  errorText={errors.descriptionEn?.message && errors.descriptionEn?.message}
                  maxCharQuantity="500"
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
           {image !== '' &&  <Image
                  src={image}
                  width={150}
                  height={170}
                  alt={'logo'}
                /> }
               
            </div>
          </div>
        </div>
        <div className={css.btt__form}>
          <ResetButton text="Скасувати" />
          <SubmitButton text="Застосувати зміни" />
        </div>
      </form>
      {(isProcessing || isLoading) && <Loader />}
    </div>
  )
}

export default EditPartners
