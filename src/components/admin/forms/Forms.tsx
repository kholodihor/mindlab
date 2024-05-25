'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForms } from '@/hooks/swr/useForms'
import { FaWpforms } from 'react-icons/fa'
import PageTitle from '../shared/pageTitle/PageTitle'
import Link from 'next/link'
import Swal from 'sweetalert2'
import EditIcon from '../courses/icons/EditIcon'
import DeleteIcon from '../courses/icons/DeleteIcon'
import Loader from '../shared/loader/Loader'
import css from './Forms.module.css'

const Forms = () => {
  const { forms, deleteForm, isLoading } = useForms()
  const [isProcessing, setIsProcessing] = useState(false)

  console.log(forms)

  const router = useRouter()

  const handleDeleteTestimonial = async (id: string) => {
    setIsProcessing(true)
    const response = await deleteForm(id)
    setIsProcessing(false)

    if (!response) {
      return Swal.fire({
        title: 'щось пішло не так',
        icon: 'error'
      })
    }
    Swal.fire({
      title: 'Форму успішно видалено',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        router.refresh()
      }
    })
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити форму?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити форму'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTestimonial(id)
      }
    })
  }

  return (
    <div className={css.page}>
      <PageTitle
        title="форми"
        isAddButtonDisplayed={true}
        isSettingsButtonDisplayed={true}
        text="Додати форму"
        href="/forms/add"
      />

      <ul className={css.testimonials__list}>
        {forms?.map((form) => (
          <li key={form.id} className={css.testimonials__item}>
            <div className={css.testimonials__thumb}>
              <FaWpforms className={css.icon} />
              <h3 className={css.name}>{form.name}</h3>
            </div>
            <div className={css.wrapper}>
              <button
                className={css.deleteBtn}
                onClick={() => {
                  handleDelete(form.id)
                }}
              >
                <DeleteIcon />
              </button>
              <Link href={`/admin/forms/edit/${form.id}`} className={css.editBtn}>
                <EditIcon />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      {(isLoading || isProcessing) && <Loader />}
    </div>
  )
}

export default Forms
