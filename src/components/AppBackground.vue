<script setup lang="ts">
import bgDesktopLight from '../assets/todo-app-main/images/bg-desktop-light.jpg'
</script>

<template>
  <div class="bg-[#FAFAFA] dark:bg-[#171823] h-screen">
    <img :src="bgDesktopLight" class="w-full h-[300px] object-cover" />
    <slot />
  </div>
</template>
