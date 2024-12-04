<script setup>
import Background from './components/Background.vue'
import Todo from '@/components/Todo.vue'
import firebaseApp from '@/functions/firebaseFunc'

firebaseApp
</script>

<template>
  <Background><Todo /></Background>
</template>

<style>
@import './assets/base.css';
</style>
