'use client'

import React, { useState } from 'react'
import { useDocuments } from '@/hooks/swr/useDocuments'
import Swal from 'sweetalert2'
import PageTitle from '../shared/pageTitle/PageTitle'
import DocumentCard from '../shared/documentCard/DocumentCard'
import Loader from '../shared/loader/Loader'
import styles from './Documents.module.css'

const Documents = () => {
  const [isProcessing, setisProcessing] = useState(false)
  const { documents, deleteDocument, isLoading } = useDocuments()

  const handleDelete = (id: string, fileId: string) => {
    Swal.fire({
      title: 'Ви впевнені, що хочете видалити документ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Відмінити',
      confirmButtonText: 'Видалити документ'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(id, fileId)
      }
    })
  }

  const deleteDoc = async (id: string, fileId: string) => {
    setisProcessing(true)
    await deleteDocument(id, fileId)
    setisProcessing(false)
    Swal.fire({
      title: 'Документ успішно видалено',
      icon: 'success'
    })
  }

  return (
    <section className={styles.wrapper}>
      <PageTitle
        title="документи"
        isAddButtonDisplayed
        isSettingsButtonDisplayed
        text="Додати документ"
        href="documents/add"
      />
      <div className={styles.documents_content}>
        <div className={styles.documents_list}>
          {documents &&
            documents.map((document) => (
              <DocumentCard key={document.id} document={document} deleteDocument={handleDelete} />
            ))}
        </div>
      </div>
      {(isLoading || isProcessing) && <Loader />}
    </section>
  )
}

export default Documents
