<script setup lang="ts">
import Header from './Header.vue'
import Input from './Input.vue'
import List from './List.vue'
import Footer from './Footer.vue'

import getTodo from '@/apis/getTodo'
import { TodoList } from '@/interfaces/interface'
import { ref } from 'vue'
import { SortableEvent, type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'

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

const onStart = (e: SortableEvent) => {
  console.log('start', e)
}

const onEnd = (e: SortableEvent) => {
  console.log('onEnd', e)
}

const onUpdate = (e: SortableEvent, todoList: TodoList[]) => {
  for (const i in todoList) {
    todoList[i].idx = Number(i)
  }
  console.log(e, todoList)
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
      @start="onStart"
      @update="(e: SortableEvent) => onUpdate(e, todoList)"
      @end="onEnd"
      class="flex flex-col gap-0"
    >
      <Input
        v-for="(item, index) in todoList"
        :key="item.id"
        :id="item.id"
        :item_name="item.item_name"
        :is_done="item.is_done"
        :idx="item.idx"
      />
    </VueDraggable>
    <preview-list :list="todoList" />
    <Footer class="mt-[49px]" />
  </div>
</template>
