<template>
  <div class="w-full mt-12 xl:mt-0">
    <div
      class="flex items-center justify-between py-3 border-b-2 first:pt-0"
      v-for="n in 5"
      :key="n"
    >
      <div class="">
        <p class="text-base font-medium text-gray-500">
          <span class="inline-block w-4 h-1 bg-red-600"></span>
          <span class="text-red-600 uppercase">Covid</span>
        </p>
        <a href="">
          <h4 class="mt-3 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
          <p class="mt-3 date" v-if="date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              /></svg
            >Tuesday, June 29, 2021
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>
