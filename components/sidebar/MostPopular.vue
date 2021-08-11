<template>
  <div class="w-full">
    <div class="flex">
      <div
        class="p-4 w-full bg-red-600 rounded-md text-white text-2xl text-center"
      >
        Trending
      </div>
      <div class="p-4 w-full bg-gray-100 rounded-md  text-2xl text-center">
        Most Recent
      </div>
    </div>
    <div class="flex w-full border-b-2 py-2" v-for="n in 4" :key="n">
      <div class="figure relative w-3/12 rounded-md overflow-hidden">
        <img src="~/assets/images/dbc/play.png" alt="" class="w-full" />
      </div>
      <div class="detail px-2 w-9/12">
        <p class="text-base font-medium text-gray-500">
          <span class="bg-red-600 w-4 h-1 inline-block"></span>
          <span class="text-red-600">PLATFORM-TEST</span>
        </p>
        <h4 class="text-base font-medium text-gray-700">
          নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
        </h4>
      </div>
    </div>
  </div>
</template>
