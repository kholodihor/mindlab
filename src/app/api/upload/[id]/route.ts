import { cloudinary } from '@/config/cloudinary'
import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const unauthorized = await requireAuth()
  if (unauthorized) return unauthorized
  try {
    await cloudinary.uploader.destroy(params.id)
    return NextResponse.json({ message: 'file deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE UPLOAD]', error)
    return NextResponse.json({ message: 'Cannot delete' }, { status: 500 })
  }
}
