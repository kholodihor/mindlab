export const getCourseColor = (title: string) => {
  if (title.toLowerCase() === 'leadership') {
    return '#aaaedf'
  }
  if (title.toLowerCase() === 'career counseling/career guidance') {
    return '#ffecd0'
  }
  if (title.toLowerCase() === 'business') {
    return '#8d83ff'
  }
  if (title.toLowerCase() === 'innovative technologies') {
    return '#03aa89'
  }
  if (title.toLowerCase() === 'art') {
    return '#2928e3'
  }
  if (title.toLowerCase() === 'political science/sociology') {
    return '#fed1ce'
  }
}
