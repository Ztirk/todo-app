<script setup>
import Header from './Header.vue'
import Input from './Input.vue'
import List from './List.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px]">
    <Header class="mb-[40px]" />
    <Input class="mb-[24px]" />
    <List />
    <Footer class="mt-[49px]" />
  </div>
</template>
