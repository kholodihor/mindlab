import axios from '@/config/axios'

export const changePassword = async (data: { password: string }) => {
  const response = await axios.post(`/user`, data, {
    headers: { 'Content-Type': 'application/json' }
  })
  return response
}
