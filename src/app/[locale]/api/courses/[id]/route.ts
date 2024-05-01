import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'
import { ICourse } from '@/types/courses'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    await prismaConnect()
    const course = await prisma.course.findUnique({
      where: {
        id: params.id
      }
    })
    if (!course) {
      return new NextResponse('Course Not found', { status: 404 })
    }
    return NextResponse.json(course, { status: 200 })
  } catch (error) {
    console.log('[GET COURSE BY ID]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    if (!params.id) {
      return new NextResponse('Course Not found', { status: 404 })
    }
    await prismaConnect()
    const data: ICourse = await request.json()
    const updatedCourse = await prisma.course.update({
      where: {
        id: params.id
      },
      data: {
        title: data.title,
        descriptionUa: data.descriptionUa,
        descriptionEn: data.descriptionEn,
        tagsUa: [...data.tagsUa],
        tagsEn: [...data.tagsEn],
        color: data.color,
        courseDescriptionUa1: data.courseDescriptionUa1,
        courseDurationUa: data.courseDurationUa,
        courseDescriptionEn1: data.courseDescriptionEn1,
        courseDurationEn: data.courseDurationEn,
        startDateUa: data.startDateUa,
        startDateEn: data.startDateEn,
        priceUa: data.priceUa,
        priceEn: data.priceEn,
        fullpriceUa: data.fullpriceUa,
        fullpriceEn: data.fullpriceEn,
        numberOfPlacesUa: data.numberOfPlacesUa,
        numberOfPlacesEn: data.numberOfPlacesEn,
        experienceUa: data.experienceUa,
        experienceEn: data.experienceEn,
        languageLevelUa: data.languageLevelUa,
        languageLevelEn: data.languageLevelEn,
        timeForLearningUa: data.timeForLearningUa,
        timeForLearningEn: data.timeForLearningEn,
        forWhomTitleUa1: data.forWhomTitleUa1,
        forWhomTitleUa2: data.forWhomTitleUa2,
        forWhomDescriptionUa1: data.forWhomDescriptionUa1,
        forWhomDescriptionUa2: data.forWhomDescriptionUa2,
        forWhomTitleEn1: data.forWhomTitleEn1,
        forWhomTitleEn2: data.forWhomTitleEn2,
        forWhomDescriptionEn1: data.forWhomDescriptionEn1,
        forWhomDescriptionEn2: data.forWhomDescriptionEn2,
        themeTitleUa: data.themeTitleUa,
        themeTitleEn: data.themeTitleEn,
        themesUa: [...data.themesUa],
        themesEn: [...data.themesEn],
        faqUa: [...data.faqUa],
        faqEn: [...data.faqEn],
        teacherIds: [...data.teacherIds]
      }
    })
    return NextResponse.json(updatedCourse, { status: 200 })
  } catch (error) {
    console.log('[UPDATE COURSE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    return new NextResponse('Not found', { status: 404 })
  }
  try {
    await prismaConnect()
    await prisma.course.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ message: 'course deleted successfully' }, { status: 200 })
  } catch (error) {
    console.log('[DELETE COURSE', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}
