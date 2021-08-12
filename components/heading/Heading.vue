<template>
  <div class="categroy-heading flex w-full my-4 items-baseline">
    <div class="heading text-4xl text-gray-700 whitespace-nowrap">
      {{ title }}
    </div>
    <div class="cat-side-border bg-gray-300 w-full h-1 rounded-md mx-4"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: "আন্তর্জাতিক"
    }
  }
};
</script>
