import axiosInterceptors from '@/configs/axiosConfig'
import { UpdateTodoItemName } from '@/interfaces/interface'

export default async function updateTodoItemName(obj: UpdateTodoItemName) {
  try {
    const res = await axiosInterceptors.put(
      'https://updatetodo-7ftcfvpbga-uc.a.run.app/' + obj.id,
      {
        item_name: obj.item_name,
      },
    )
    const data = res.data

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
