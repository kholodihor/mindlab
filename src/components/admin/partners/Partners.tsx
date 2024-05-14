'use client'
import React from 'react'
import PageTitle from '../shared/pageTitle/PageTitle'
import css from './Partners.module.css'
import { usePartners } from '@/hooks/swr/usePartners'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ArrowSliderPartners from '@/components/icons/ArrowSliderPartners'
import { useState } from 'react'
import DeleteIcon from '../courses/icons/DeleteIcon'
import EditIcon from '../courses/icons/EditIcon'
import Loader from '../shared/loader/Loader'

const Partners = () => {
  const {partners, isLoading, deletePartner} = usePartners()
  const [isProcessing, setIsProcessing] = useState(false)
 
  const router = useRouter()

  const handleDeletePartner = async (id: string, imageId: string) => {
    setIsProcessing(true)
   await deletePartner(id, imageId)
    setIsProcessing(false)
    Swal.fire({
      title: 'Партнер успішно видалено',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        router.refresh()
      }
    })
  }

  const handleDelete = (id: string, imageId: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити партнера?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити партнера'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePartner(id, imageId)
      }
    })
  }
  return <div>
    <PageTitle title='Партнери' isAddButtonDisplayed={true} isSettingsButtonDisplayed={true} text='Додати партнера' href={'/partners/add'}/>
    <ul className={css.container}>
      {partners?.map(({id, color, nameEn, imageUrl, descriptionUa, websiteLink, imageId})=><li key={id} className={css.partner__item} style={{backgroundColor: color}}>
<Image src={imageUrl} width={120} height={120} alt={nameEn} className={css.partner__logo}/>
<p className={css.partner__description}>{descriptionUa}</p>
<div className={css.thumb}>
<Link href={websiteLink} className={css.partner__link}>
  <p className={css.partner__name}>{nameEn}</p>
  <div className={css.icon__arrow}>
    <ArrowSliderPartners />
  </div>
</Link>
<div className={css.wrapper}>
  <button className={css.deleteBtn} onClick={()=> handleDelete(id, imageId)}><DeleteIcon /></button>
   
<Link href={`/admin/partners/edit/${id}`} onClick={()=> console.log(id)} className={css.editBtn}>
  <EditIcon />
 </Link>   
</div>
</div>
      </li>)}
    </ul>
    {(isLoading || isProcessing) && <Loader />}
  </div>
}

export default Partners
