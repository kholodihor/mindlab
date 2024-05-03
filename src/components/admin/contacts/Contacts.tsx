'use client'

import React, { useState } from 'react'
import styles from './Contacts.module.css'
import Swal from 'sweetalert2'
import Link from 'next/link'
import PageTitle from '../shared/pageTitle/PageTitle'
import EditIcon from '../courses/icons/EditIcon'
import DeleteIcon from '../courses/icons/DeleteIcon'
import {contacts} from './contact'

const Contacts = () => {
  const [isProcessing, setisProcessing] = useState(false)

  const handleDelete = (id: string) => {
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
        deleteContact(id)
      }
    })
  }

  const deleteContact = async (id: string) => {
    setisProcessing(true)
    /*await deleteDocument(id)
    setisProcessing(false)
    Swal.fire({
      title: 'Документ успішно видалено',
      icon: 'success'
    })*/
  }

  return (
    <section>
      <PageTitle title='контакти' isSettingsButtonDisplayed isAddButtonDisplayed={false} />
      <div className={styles.contacts}>
        <div className={styles.contact_list}>
          {contacts && contacts.map((contact, index) => (
            <div key={index} className={styles.contact_item}>
              <div className={styles.contact_desc}>
                <div className={styles.contact_title}>
                  <span className={styles.contact_icon}>{contact.icon}</span>
                  <h4>{contact.name}</h4>
                </div>
                <p className={styles.contact_input}>{contact.value}</p>
              </div>
              <div className={styles.btn_box}>
                <button className={`${styles.btn} ${styles.btn_delete}`} onClick={() => handleDelete(contact.name)}><DeleteIcon/></button>
                <Link className={`${styles.btn} ${styles.btn_edit}`} href={`/admin/contacts/edit/${contact.name.toLowerCase()}`}><EditIcon/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts
