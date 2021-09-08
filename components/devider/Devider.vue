<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex items-center justify-between">
      <span
        class="
          pr-3
          text-base
          font-medium
          text-gray-700 text-gray-900
          bg-white
          md:text-4xl
          whitespace-nowra
        "
      >
        {{ title }}
      </span>
      <button
        type="button"
        class="
          inline-flex
          items-center
          px-4
          py-1.5
          text-sm
          leading-5
          font-medium
          text-gray-400
          bg-white
          hover:text-gray-700
        "
      >
        <a href="">View More</a>
      </button>
    </div>
  </div>
  <!-- <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex justify-start">
      <span
        class="pr-2 text-base text-gray-700 bg-white md:text-4xl heading whitespace-nowrap"
      >
        {{ title }}
      </span>
    </div>
  </div> -->
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: "আন্তর্জাতিক",
    },
  },
};
</script>
