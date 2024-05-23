export interface IDocument {
  id: string
  fileName_ua?: string
  fileName_en?: string
  fileUrl?: string
  fileId?: string
}

export type DocumentFormData = {
  fileName_ua?: string
  fileName_en?: string
  file?: FileList
}
