<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import iconCheck from '../assets/todo-app-main/images/icon-check.svg'
import { id_ID } from '@faker-js/faker/.'

defineEmits(['onChange', 'onUnFocus', 'onCheck'])

const textField = ref(null)

const func = () => {
  alert('helo')
}
</script>

<script lang="ts">
export default {
  props: {
    id: String,
    item_name: String,
    is_done: Boolean,
    idx: Number,
  },
}
</script>

<template>
  <div
    class="flex border-[#979797] border bg-white"
    :class="idx == 0 ? 'rounded-t-[5px] ' : idx == undefined ? '' : ''"
  >
    <div class="h-[64px] flex px-[24px] items-center">
      <div
        v-if="is_done == false"
        class="h-[24px] aspect-square rounded-full cursor-pointer border-[#E3E4F1] border hover:border-[#C058F3]"
        @click.stop="(e) => $emit('onCheck', e, idx)"
      />
      <div
        v-else
        class="bg-gradient-to-br from-[#55DDFF] to-[#C058F3] h-[24px] aspect-square rounded-full flex items-center justify-center cursor-pointer"
        @click.stop
      >
        <img
          src="../assets/todo-app-main/images/icon-check.svg"
          @click.stop="(e) => $emit('onCheck', e, idx)"
        />
      </div>
    </div>
    <input
      placeholder="Create a new todo..."
      class="w-full"
      @click.stop
      :value="item_name"
      @change="(e) => $emit('onChange', e, idx)"
      @focusin="(e) => $emit('onUnFocus', e, idx)"
    />
    <!-- <v-text-field
      ref="textField"
      label="Create a new todo..."
      :class="is_done ? 'line-through' : ''"
      class="text-[500px] font-normal"
      variant="outlined"
      :model-value="item_name"
      single-line
      :id="id"
      @update:model-value="(e) => $emit('onChange', e, idx)"
      @update:focused="(e) => $emit('onUnFocus', e, idx)"
      @click.stop
    >
    </v-text-field> -->

    <div class="flex justify-center place-items-center w-10 cursor-pointer" v-if="id">
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
  opacity: 100%;

  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  column-gap: 24px;
}

.v-field-label {
  translate: 55px;
}
</style>
