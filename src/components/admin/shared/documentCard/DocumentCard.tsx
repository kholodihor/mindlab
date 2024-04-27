import React from 'react'
import styles from './DocumentCard.module.css'
import PdfIcon from '@/components/icons/PdfIcon'
import DeleteIcon from '../../courses/icons/DeleteIcon'
import { IDocument } from '@/types/documents'

type DocumentProps = {
  document: IDocument
  deleteDocument: (id: string, public_id: string) => void
}

const DocumentCard = ({ document, deleteDocument }: DocumentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.document_info}>
        <PdfIcon />
        <h3 className={styles.name}>{document.fileName}</h3>
      </div>
      <button
        className={styles.btn_delete}
        onClick={() => deleteDocument(document.id, document.fileId)}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default DocumentCard
