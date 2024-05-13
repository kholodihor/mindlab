import axios from '@/config/axios'

export const changePassword = async (data: { email: string; password: string }) => {
  try {
    console.log(data)
    const response = await axios.post(`/user`, data, {
      headers: { 'Content-Type': 'application/json' }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
