<script setup lang="ts">
import Header from './Header.vue'
import Input from './Input.vue'
import Footer from './Footer.vue'

import getTodo from '@/apis/getTodo'
import { TodoList, UpdateTodoItemName } from '@/interfaces/interface'
import { ref } from 'vue'
import { SortableEvent, type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import updateTodoItemName from '@/apis/updateTodoItemName'

const loading = ref(false)
const todoList = ref<TodoList[]>([])
const error = ref('')

async function fetchTodo() {
  error.value = ''
  todoList.value = []
  loading.value = true

  try {
    todoList.value = await getTodo()
    console.log(todoList)
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
  console.log('start', e)
}

const onDragEnd = (e: SortableEvent) => {
  console.log('onEnd', e)
}

const onDragUpdate = (e: SortableEvent, todoList: TodoList[]) => {
  for (const i in todoList) {
    todoList[i].idx = Number(i)
  }
  console.log(e, todoList)
}

const onCheck = (idx: number) => {
  let is_done = todoList.value[idx].is_done
  is_done = !is_done
}

const onChange = (e: string, idx: number) => {
  todoList.value[idx].item_name = e
}

const onUnFocus = (e: boolean, idx: number) => {
  if (!e) {
    const obj: UpdateTodoItemName = {
      item_name: todoList.value[idx].item_name,
      id: todoList.value[idx].id,
    }
    updateTodoItemName(obj)
  }
}
</script>

<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px]">
    <Header class="mb-[40px]" />
    <Input class="mb-[24px]" />
    <VueDraggable
      ref="el"
      v-model="todoList"
      :disabled="false"
      :animation="150"
      ghostClass="ghost"
      @start="onDragStart"
      @update="(e: SortableEvent) => onDragUpdate(e, todoList)"
      @end="onDragEnd"
      class="flex flex-col gap-0"
    >
      <Input
        v-for="(item, index) in todoList"
        :key="item.id"
        :id="item.id"
        :item_name="item.item_name"
        :is_done="item.is_done"
        :idx="item.idx"
        @on-change="onChange"
        @on-un-focus="onUnFocus"
      />
    </VueDraggable>
    <preview-list :list="todoList" />
    <Footer class="mt-[49px]" />
  </div>
</template>
