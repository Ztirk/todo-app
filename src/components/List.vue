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

function onEnd() {
  console.log(1)
}
function onStart() {
  console.log(2)
}
function onUpdate() {
  console.log(3)
}
</script>

<template>
  <VueDraggable
    ref="el"
    v-model="post"
    :disabled="false"
    :animation="150"
    ghostClass="ghost"
    @start="onStart"
    @update="onUpdate"
    @end="onEnd"
    class="flex flex-col gap-0"
  >
    <Input
      v-for="(item, index) in post"
      :key="item.id"
      :item_name="item.item_name"
      :is_done="item.is_done"
      :idx="item.idx"
    />
  </VueDraggable>
  <preview-list :list="post" />
</template>
