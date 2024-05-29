'use client'

const colors: string[] = ['#aaaedf', '#ffecd0', '#8d83ff', '#03aa89', '#2928e3', '#fed1ce']

export const getRandomColor = (colorArray: string[] = colors): string => {
  const randomIndex = Math.floor(Math.random() * colorArray.length)
  return colorArray[randomIndex]
}
