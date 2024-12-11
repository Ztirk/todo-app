<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const count = ref(0)

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
</script>

<script lang="ts">
export default {
  props: {
    id: String,
    item_name: String,
    id_done: Boolean,
    idx: Number,
  },
}
</script>

<template>
  <div class="flex">
    <v-text-field
      label="Create a new todo..."
      class="font-normal text-[500px]"
      variant="outlined"
      :model-value="item_name"
      single-line
      :id="id"
      ><div
        v-if="!id_done"
        class="border border-[#E3E4F1] h-[24px] aspect-square rounded-full"
        @click="greet"
      />
      <img v-else src="../assets/todo-app-main-images/icon-check.svg" />
    </v-text-field>
    <div class="bg-[#ffffff] flex justify-center place-items-center w-10 border border-[#979797]">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
  </div>
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
