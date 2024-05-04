export const translateContactsNames = (name: string) => {
  if (name === 'email') {
    return 'Електронна Пошта'
  }
  if (name === 'phone') {
    return 'Телефон'
  }
  if (name === 'telegram') {
    return 'Telegram'
  }
  if (name === 'instagram') {
    return 'Instagram'
  }
  if (name === 'facebook') {
    return 'Facebook'
  }
  return name
}
