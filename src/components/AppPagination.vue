<script setup lang="ts">
defineEmits(['onClickAll', 'onClickActive', 'onClickCompleted', 'onClickClear'])
</script>

<script lang="ts">
export default {
  props: {
    count: Number,
    highlight: String,
  },
}
</script>

<template>
  <div
    class="bg-white h-[50px] border border-[#979797] rounded-b-[5px] flex justify-between items-center px-[24px] dark:bg-[#25273D]"
  >
    <div class="text-[#9495A5] text-[14px] italic">{{ count }} item left</div>
    <div class="text-[#9495A5] flex gap-[18px] max-[376px]:hidden">
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'all' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickAll')"
      >
        All
      </div>
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'active' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickActive')"
      >
        Active
      </div>
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'completed' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickCompleted')"
      >
        Completed
      </div>
    </div>
    <div
      class="text-[#9495A5] hover:text-[#494C6B] font-bold cursor-pointer text-[14px]"
      @click="$emit('onClickClear')"
    >
      Clear Completed
    </div>
  </div>
  <div
    class="bg-white h-[50px] border border-[#979797] rounded-b-[5px] flex justify-between items-center px-[24px] mt-[16px] min-[376px]:hidden"
  >
    <div class="text-[#9495A5] flex gap-[18px] justify-center w-full">
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'all' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickAll')"
      >
        All
      </div>
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'active' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickActive')"
      >
        Active
      </div>
      <div
        :class="`hover:text-[#494C6B] font-bold cursor-pointer text-[14px] ${highlight == 'completed' ? 'text-[#3A7CFD]' : ''}`"
        @click="$emit('onClickCompleted')"
      >
        Completed
      </div>
    </div>
  </div>
</template>
