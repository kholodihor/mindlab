import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export { cloudinary }

/**
 * Deletes a stored file. Failures are logged, not thrown: it runs after the
 * database change has already succeeded, so a cleanup error shouldn't fail the request.
 */
export const destroyFile = async (publicId: string | null | undefined, logTag: string) => {
  if (!publicId) return
  await cloudinary.uploader.destroy(publicId).catch((error) => {
    console.log(`[${logTag}]`, error)
  })
}
