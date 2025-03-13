<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppInput from './AppInput.vue'
import AppFooter from './AppFooter.vue'
import AppPagination from './AppPagination.vue'

import getTodo from '@/apis/getTodo'
import { TodoList, UpdateTodoItemName } from '@/interfaces/interface'
import { ref } from 'vue'
import { SortableEvent, type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import updateTodoItemName from '@/apis/updateTodoItemName'
import updateTodoIsDone from '@/apis/updateTodoIsdone'
import updateTodoIndex from '@/apis/updateTodoIndex'
import deleteTodo from '@/apis/deleteTodo'
import addTodo from '@/apis/addTodo'

const loading = ref(false)
const todoList = ref<TodoList[]>([])
const error = ref('')
const all = ref(true)
const active = ref(false)
const completed = ref(false)

async function fetchTodo() {
  error.value = ''
  todoList.value = []
  loading.value = true

  try {
    todoList.value = await getTodo()
    console.log(todoList.value)
  } catch (err) {
    console.log(err)
    error.value = (err as Error).toString()
  } finally {
    loading.value = false
  }
}
fetchTodo()

const el = ref<UseDraggableReturn>()

const onDragStart = (e: SortableEvent) => {
  // console.log('start', e)
}

const onDragEnd = (e: SortableEvent) => {
  // console.log('onEnd', e)
}

const onDragUpdate = () => {
  sortIdxTodoList()
  updateTodoIndex(todoList.value)
}

const sortIdxTodoList = () => {
  for (const i in todoList.value) {
    todoList.value[Number(i)].idx = Number(i)
  }
}

const onCheck = (idx: number) => {
  const id = todoList.value[idx].id
  const is_done = !todoList.value[idx].is_done

  todoList.value[idx].is_done = is_done

  updateTodoIsDone({
    id: id,
    is_done: is_done,
  })
}

const onUnFocus = (e: FocusEvent, idx: number) => {
  const item_name = (e.target as HTMLInputElement).value
  const obj: UpdateTodoItemName = {
    item_name: item_name,
    id: todoList.value[idx].id,
  }
  updateTodoItemName(obj)
}

const onDelete = async (id: string, idx: number) => {
  todoList.value.splice(idx, 1)

  deleteTodo(id)

  onDragUpdate()
}

const onAddTodo = async (e: KeyboardEvent) => {
  if (e.key == 'Enter') {
    const item_name = (e.target as HTMLInputElement).value
    const currentIdx = todoList.value.length

    const obj: TodoList = {
      id: '',
      idx: currentIdx,
      is_done: false,
      item_name: item_name,
    }
    ;(e.target as HTMLInputElement).value = ''
    todoList.value.push(obj)
    const id = await addTodo(obj)
    todoList.value[currentIdx].id = id
  }
}

const onClickAll = () => {
  all.value = true
  active.value = false
  completed.value = false
}

const onClickActive = () => {
  all.value = false
  active.value = !active.value
  completed.value = false
}

const onClickCompleted = () => {
  all.value = false
  active.value = false
  completed.value = !completed.value
}

const onClickClear = () => {
  const todos: TodoList[] = [...todoList.value]

  todoList.value = []

  for (const obj of todos) {
    deleteTodo(obj.id)
  }
}

const filterTodo = () => {
  if (todoList.value.length) {
  }
  if (all.value) {
    return todoList.value
  } else if (active.value) {
    return todoList.value.filter((obj) => obj.is_done)
  } else {
    return todoList.value.filter((obj) => !obj.is_done)
  }
}
</script>

<template>
  <div
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] max-[376px]:w-[327px] drop-shadow-md"
  >
    <AppHeader class="mb-[40px]" />
    <AppInput class="mb-[24px]" @on-add-todo="onAddTodo" />

    <VueDraggable
      ref="el"
      v-model="todoList"
      :disabled="active || completed ? true : false"
      :animation="150"
      ghostClass="ghost"
      @start="onDragStart"
      @update="onDragUpdate()"
      @end="onDragEnd"
      class="flex flex-col gap-0 max-h-[394.68px] overflow-y-auto"
    >
      <AppInput
        v-for="item in filterTodo()"
        :key="item.id"
        :id="item.id"
        :item_name="item.item_name"
        :is_done="item.is_done"
        :idx="item.idx"
        @on-un-focus="onUnFocus"
        @on-check="onCheck"
        @on-delete="onDelete"
      />
    </VueDraggable>
    <preview-list :list="todoList" />
    <AppPagination
      :count="todoList.length ? todoList.filter((d) => !d.is_done).length : 0"
      :highlight="all ? 'all' : active ? 'active' : completed ? 'completed' : ''"
      @on-click-all="onClickAll"
      @on-click-active="onClickActive"
      @on-click-completed="onClickCompleted"
      @on-click-clear="onClickClear"
    />

    <AppFooter class="mt-[49px]" />
  </div>
</template>
