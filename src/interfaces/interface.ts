export interface TodoList {
  id: string
  item_name: string
  idx: number
  is_done: boolean
}

export interface UpdateTodoIndex {
  id: string
  idx: number
}
export interface UpdateTodoItemName {
  id: string
  item_name: string
}
export interface UpdateTodoIsDone {
  id: string
  is_done: boolean
}
export interface deleteTodo {
  id: string
}
