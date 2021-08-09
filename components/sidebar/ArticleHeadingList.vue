<template>
  <div class="w-full">
    <div
      class="border-b-2 flex justify-between items-center"
      v-for="n in 4"
      :key="n"
    >
      <div class="detail py-2">
        <p class="text-base font-medium text-gray-500">
          <span class="bg-red-600 w-4 h-1 inline-block"></span>
          <span class="text-red-600">Covid</span>
        </p>
        <h4 class="text-base font-medium text-gray-700 my-2">
          নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
        </h4>
        <p class="text-base font-medium text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block"
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
      </div>
      <div class="number">
        <span class="text-6xl font-medium text-gray-500">1</span>
      </div>
    </div>
  </div>
</template>
