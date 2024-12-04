<script setup>
import { ref } from 'vue'

const count = ref(0)

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
</script>

<script>
export default {
  props: {
    name: String,
    id: Number,
  },
}
</script>

<template>
  <v-text-field
    label="Create a new todo..."
    class="font-normal text-[500px]"
    variant="outlined"
    :model-value="name"
    single-line
    ><div class="border border-[#E3E4F1] h-[24px] aspect-square rounded-full" @click="greet" />
  </v-text-field>
</template>

<style>
.v-field__field {
  height: 64px;
}

.v-input__details {
  display: none;
}

.v-field__input {
  height: 64px;
  background: #ffffff;
  border-radius: 5px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  column-gap: 24px;
}

.v-field-label {
  translate: 55px;
}
</style>
