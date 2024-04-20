'use client'

import React, { useState } from 'react'
import styles from './Documents.module.css'
import { documents } from './document'
import PageTitle from '../shared/pageTitle/PageTitle'
import DocumentCard from '../shared/documentCard/DocumentCard'

const Documents = () => {
  const [documentsList, setDocumentsList] = useState(documents)

  function deleteDocument(id: number) {
    const newDocumentsList = documentsList.filter((document) => Number(document.id) !== id)
    console.log(newDocumentsList)

    setDocumentsList(newDocumentsList)
  }

  return (
    <section>
      <PageTitle title='документи' isAddButtonDisplayed isSettingsButtonDisplayed text='Додати документ' href='documents/add'/>
      <div className={styles.documents_content}>
        <div className={styles.documents_list}>
          {documentsList && documentsList.map((file) => (
            <DocumentCard key={file.id} document={file} deleteDocument={deleteDocument} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Documents
