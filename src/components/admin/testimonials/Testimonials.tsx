'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTestimonials } from '@/hooks/swr/useTestimonials'
import PageTitle from '../shared/pageTitle/PageTitle'
import Avatar from 'react-avatar'
import Link from 'next/link'
import Swal from 'sweetalert2'
import EditIcon from '../courses/icons/EditIcon'
import DeleteIcon from '../courses/icons/DeleteIcon'
import Loader from '../shared/loader/Loader'
import css from './Testimonials.module.css'

const Testimonials = () => {
  const { testimonials, isLoading, deleteTestimonial } = useTestimonials()
  const [isProcessing, setIsProcessing] = useState(false)

  const router = useRouter()

  const handleDeleteTestimonial = async (id: string) => {
    setIsProcessing(true)
    const response = await deleteTestimonial(id)
    setIsProcessing(false)

    if (!response) {
      return Swal.fire({
        title: 'щось пішло не так',
        icon: 'error'
      })
    }
    Swal.fire({
      title: 'Курс успішно видалено',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        router.refresh()
      }
    })
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити курс?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити курс'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteTestimonial(id)
      }
    })
  }

  return (
    <div>
      <PageTitle
        title="відгуки"
        isAddButtonDisplayed={true}
        isSettingsButtonDisplayed={true}
        text="Додати відгук"
        href="/testimonials/add"
      />

      <ul className={css.testimonials__list}>
        {testimonials?.map(({ id, message, name }) => (
          <li key={id} className={css.testimonials__item}>
            <div className={css.testimonials__thumb}>
              <Avatar round={true} size={'50px'} color={'#AAAEDF'} name={name} />
              <p className={css.name}>{name}</p>
            </div>
            <p className={css.message}>{message}</p>
            <div className={css.wrapper}>
              <button
                className={css.deleteBtn}
                onClick={() => {
                  handleDelete(id)
                }}
              >
                <DeleteIcon />
              </button>

              <Link
                href={`/admin/testimonials/edit/${id}`}
                onClick={() => console.log(id)}
                className={css.editBtn}
              >
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

export default Testimonials
