'use client'

import React from 'react'
import styles from './Documents.module.css'
import { useDocuments } from '@/hooks/swr/useDocuments'
import PageTitle from '../shared/pageTitle/PageTitle'
import DocumentCard from '../shared/documentCard/DocumentCard'

const Documents = () => {
  const { documents, deleteDocument, isLoading } = useDocuments()

  const handleDelete = (id: string, fileId: string) => {
    if (confirm('Ви впевнені, що хочете видалити цей документ?')) {
      deleteDocument(id, fileId)
      console.log(fileId)
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <section>
      <PageTitle title='документи' isAddButtonDisplayed isSettingsButtonDisplayed text='Додати документ' href='documents/add'/>
      <div className={styles.documents_content}>
        <div className={styles.documents_list}>
          {documents && documents.map((document) => (
            <DocumentCard key={document.id} document={document} deleteDocument={handleDelete} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Documents
