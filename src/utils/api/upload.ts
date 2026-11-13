import axios from '@/config/axios'
import { UploadResponse } from '@/types'

type UploadedFile = { fileId: string; fileUrl: string }
type SaveRecord<T> = (_uploaded: UploadedFile) => Promise<T>

/**
 * Uploads `file`, then runs `save` with its Cloudinary ids.
 * If saving fails, the upload is deleted so it doesn't stay orphaned in Cloudinary.
 */
export const withUploadedFile = async <T>(file: File, save: SaveRecord<T>): Promise<T> => {
  const formData = new FormData()
  formData.append('file', file)
  const { data }: UploadResponse = await axios.post('/upload', formData)
  try {
    return await save({ fileId: data.fileId, fileUrl: data.fileUrl })
  } catch (error) {
    await axios.delete(`/upload/${encodeURIComponent(data.fileId)}`).catch(() => {})
    throw error
  }
}
