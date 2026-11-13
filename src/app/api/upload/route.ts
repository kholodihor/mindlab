import { cloudinary } from '@/config/cloudinary'
import { requireAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    if (!(file instanceof File)) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 })
    }

    const base64Data = Buffer.from(await file.arrayBuffer()).toString('base64')
    const fileUri = `data:${file.type};base64,${base64Data}`

    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      resource_type: 'auto',
      filename_override: file.name,
      unique_filename: false,
      use_filename: true,
      folder: 'mindlab'
    })

    return NextResponse.json({
      message: 'success',
      fileUrl: result.secure_url,
      fileId: result.public_id
    })
  } catch (error) {
    console.log('[UPLOAD]', error)
    return NextResponse.json({ message: 'failure' }, { status: 500 })
  }
}
