import axiosInterceptors from '@/configs/axiosConfig'


export default async function deleteTodo(id: string) {
  try {
    const res = await axiosInterceptors.delete(import.meta.env.VITE_DELETE_TODO + '/' + id)
    const data = res.data

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
