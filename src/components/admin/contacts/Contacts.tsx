'use client'

import React, { useState } from 'react'
import styles from './Contacts.module.css'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { useContacts } from '@/hooks/swr/useContacts'
import { translateContactsNames } from '@/helpers/contactNames'
import PageTitle from '../shared/pageTitle/PageTitle'
import EditIcon from '../courses/icons/EditIcon'
import DeleteIcon from '../courses/icons/DeleteIcon'
import Loader from '../shared/loader/Loader'
import MailIcon from '@/components/icons/MailIcon'
import PhoneIcon from '@/components/icons/PhoneIcon'
import TelegramIcon from '@/components/icons/TelegramIcon'
import InstagramIcon from '@/components/icons/InstagramIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'
import { IContact } from '@/types/contacts'

const Contacts = () => {
  const { contacts, isLoading, deleteContact } = useContacts()
  const [isProcessing, setisProcessing] = useState(false)

  const handleDelete = (id: string, name: string, item: IContact) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити контакт?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити контакт '
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteContact(id, name, item)
      }
    })
  }

  const handleDeleteContact = async (id: string, name: string, item: IContact) => {
    setisProcessing(true)
    setisProcessing(false)
    await deleteContact(id, name, item)
    setisProcessing(false)
    Swal.fire({
      title: 'Документ успішно видалено',
      icon: 'success'
    })
  }

  return (
    <section className={styles.wrapper}>
      <PageTitle title="контакти" isSettingsButtonDisplayed isAddButtonDisplayed={false} />
      <div className={styles.contacts}>
        <div className={styles.contact_list}>
          {Object.keys(contacts[0])
            .filter((name) => name !== 'id' && name !== 'createdAt')
            .map((name, index) => (
              <div key={index} className={styles.contact_item}>
                <div className={styles.contact_desc}>
                  <div className={styles.contact_title}>
                    {name === 'email' && (
                      <span className={styles.contact_icon}>
                        <MailIcon />
                      </span>
                    )}
                    {name === 'phone' && (
                      <span className={styles.contact_icon}>
                        <PhoneIcon />
                      </span>
                    )}
                    {name === 'telegram' && (
                      <span className={styles.contact_icon}>
                        <TelegramIcon />
                      </span>
                    )}
                    {name === 'instagram' && (
                      <span className={styles.contact_icon}>
                        <InstagramIcon />
                      </span>
                    )}
                    {name === 'facebook' && (
                      <span className={styles.contact_icon}>
                        <FacebookIcon />
                      </span>
                    )}
                    <h4>{translateContactsNames(name)}</h4>
                  </div>
                  <p className={styles.contact_input}>{contacts[0][name]}</p>
                </div>
                <div className={styles.btn_box}>
                  <button
                    className={`${styles.btn} ${styles.btn_delete}`}
                    onClick={() => handleDelete(contacts[0].id, name, contacts[0])}
                  >
                    <DeleteIcon />
                  </button>
                  <Link
                    className={`${styles.btn} ${styles.btn_edit}`}
                    href={`/admin/contacts/edit/${name}`}
                  >
                    <EditIcon />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      {(isLoading || isProcessing) && <Loader />}
    </section>
  )
}

export default Contacts
