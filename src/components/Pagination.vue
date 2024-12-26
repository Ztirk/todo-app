<script setup lang="ts"></script>

<script lang="ts">
export default {
  props: {
    count: Number,
  },
}
</script>

<template>
  <div
    class="bg-white h-[50px] border border-[#979797] rounded-b-[5px] flex justify-between items-center px-[24px]"
  >
    <div class="text-[#9495A5] text-[14px] italic">{{ count }} item left</div>
    <div class="text-[#9495A5] flex gap-[18px]">
      <div class="hover:text-[#494C6B] font-bold cursor-pointer text-[14px]">All</div>
      <div class="hover:text-[#494C6B] font-bold cursor-pointer text-[14px]">Active</div>
      <div class="hover:text-[#494C6B] font-bold cursor-pointer text-[14px]">Completed</div>
    </div>
    <div class="text-[#9495A5] hover:text-[#494C6B] font-bold cursor-pointer text-[14px]">
      Clear Completed
    </div>
  </div>
</template>
