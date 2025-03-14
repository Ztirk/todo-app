import axiosInterceptors from '@/configs/axiosConfig'

export default async function getTodo() {
  try {
    const res = await axiosInterceptors.get(import.meta.env.VITE_GET_TODO)
    const data = res.data

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
