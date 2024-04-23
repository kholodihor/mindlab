import React from 'react'
import styles from './DocumentCard.module.css'
import PdfIcon from '@/components/icons/PdfIcon'
import DeleteIcon from '../../courses/icons/DeleteIcon'

type DocumentProps = {
  document: {
    id: string
    name: string
  }
  deleteDocument: (id: number) => void
}

const DocumentCard = ({ document, deleteDocument }: DocumentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.document_info}>
        <PdfIcon />
        <h3 className={styles.name}>{document.name}</h3>
      </div>
      <button className={styles.btn_delete} onClick={() => deleteDocument(parseInt(document.id))}><DeleteIcon /></button>
    </div>
  )
}

export default DocumentCard