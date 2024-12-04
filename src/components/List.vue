<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Input from './Input.vue'
import getTodo from '@/apis/getTodo'

const loading = ref(false)
const post = ref(null)
const error = ref(null)

async function fetchTodo() {
  error.value = post.value = null
  loading.value = true

  try {
    // replace `getPost` with your data fetching util / API wrapper
    post.value = await getTodo()
  } catch (err) {
    error.value = err.toString()
  } finally {
    loading.value = false
  }
}
fetchTodo()
</script>

<template>
  <VueDraggable
    ref="el"
    v-model="list"
    :disabled="disabled"
    :animation="150"
    ghostClass="ghost"
    @start="onStart"
    @update="onUpdate"
    @end="onEnd"
    class="flex flex-col gap-0"
  >
    <Input v-for="item in list" :key="item.id" :name="item.name">
      {{ item.name }}
    </Input>
  </VueDraggable>
  <preview-list :list="list" />
</template>
