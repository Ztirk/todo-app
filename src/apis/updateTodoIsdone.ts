import axiosInterceptors from '@/configs/axiosConfig'
import { UpdateTodoIsDone } from '@/interfaces/interface'

export default async function updateTodoIsDone(obj: UpdateTodoIsDone) {
  try {
    const res = await axiosInterceptors.put(
      'https://updatetodo-7ftcfvpbga-uc.a.run.app/' + obj.id,
      {
        is_done: obj.is_done,
      },
    )
    const data = res.data

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
