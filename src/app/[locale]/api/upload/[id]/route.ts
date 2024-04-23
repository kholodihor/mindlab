import { cloudinary } from '@/config/cloudinary'
import { NextApiRequest } from 'next'

export async function DELETE(req: NextApiRequest, { params }: { params: { id: string } }) {
  try {
    await cloudinary.uploader.destroy(params.id)
    return { success: true }
  } catch (error) {
    console.log(error)
  }
}
