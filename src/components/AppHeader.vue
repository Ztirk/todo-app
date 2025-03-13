<script setup lang="ts">
import sun from '../assets/todo-app-main/images/icon-sun.svg'

const onClickTheme = () => {
  if (localStorage.theme == 'light') {
    localStorage.theme = 'dark'
    document.documentElement.classList.toggle('dark', true)
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.toggle('dark', false)
  }
}
</script>

<template>
  <div class="flex place-items-center justify-between">
    <div class="text-[40px] font-bold tracking-[15px] text-[#FFFFFF]">TODO</div>
    <img :src="sun" @click="onClickTheme" />
  </div>
</template>
