<template>
  <div class="relative mx-1">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex items-center justify-between">
      <span
        class="pr-2 text-lg font-bold tracking-wider text-red-700  bg-gray-50 md:text-xl whitespace-nowra"
      >
        {{ title }}
      </span>
      <button
        type="button"
        class="
          inline-flex
          items-center
          pl-2
          py-1.5
          text-sm
          leading-5
          font-medium
          text-gray-500
          bg-gray-50
          hover:text-gray-700
        "
      >
        <nuxt-link :to="{ name: 'video' }" class="tracking-wider"
          >আরো দেখুন</nuxt-link
        >
      </button>
    </div>
  </div>
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
