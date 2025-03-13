import axiosInterceptors from '@/configs/axiosConfig'
import type { TodoList } from '@/interfaces/interface'

export default async function updateTodoIndex(d: TodoList[]) {
  try {
    const res = await axiosInterceptors.post(import.meta.env.VITE_UPDATE_INDEX_TODO, d)
    const data = res.data

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
