const colors = ['#aaaedf', '#ffecd0', '#8d83ff', '#03aa89', '#2928e3', '#fed1ce']

export const getRandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}
