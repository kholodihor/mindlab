export interface IDocument {
  id: string
  fileName?: string
  fileUrl?: string
  fileId?: string
}

export type DocumentFormData = {
  fileName?: string
  file?: FileList
}
