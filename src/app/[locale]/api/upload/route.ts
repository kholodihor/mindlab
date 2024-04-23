import { cloudinary } from '@/config/cloudinary' // your config path
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary'
import { NextRequest, NextResponse } from 'next/server'

type UploadResponse =
  | { success: true; result?: UploadApiResponse }
  | { success: false; error: UploadApiErrorResponse }

const uploadToCloudinary = (fileUri: string, fileName: string): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        filename_override: fileName,
        folder: 'mindlab', // any sub-folder name in your cloud
        use_filename: true
      })
      .then((result) => {
        resolve({ success: true, result })
      })
      .catch((error) => {
        reject({ success: false, error })
      })
  })
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const file = formData.get('file') as File

    const fileBuffer = await file.arrayBuffer()

    const mimeType = file.type
    const encoding = 'base64'
    const base64Data = Buffer.from(fileBuffer).toString('base64')

    const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data

    const res = await uploadToCloudinary(fileUri, file.name)

    if (res.success && res.result) {
      if (res.success && res.result) {
        return NextResponse.json({
          message: 'success',
          imageUrl: res.result.secure_url,
          imageId: res.result.public_id
        })
      }
    } else return NextResponse.json({ message: 'failure' })
  } catch (error) {
    console.log(error)
  }
}

// export async function DELETE(req: Request) {
//   try {
//     const data = await req.json()
//     console.log(data)
//     // await cloudinary.uploader.destroy(data.imageId)
//     return { success: true }
//   } catch (error) {
//     console.log(error)
//   }
// }
