<template>
  <div class="relative h-full mb-6 rounded-md shadow-md sm:shadow-none">
    <a href="">
      <div class="overflow-hidden rounded-md">
        <img
          src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
          alt=""
          class="w-full"
        />
      </div>
      <div class="border-b">
        <a href="">
          <div class="flex w-full my-4">
            <p class="text-sm font-medium text-gray-500 uppercase">
              Covid World
            </p>
          </div>
          <h3
            class="block mt-2 text-base font-medium text-gray-600 truncate pointer-events-none "
          >
            নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
          </h3>
          <p
            class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
          >
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
    </a>

    <div class="border-b" v-for="n in 2" :key="n">
      <a href="">
        <div class="flex w-full my-4">
          <p class="text-sm font-medium text-gray-500 uppercase">Covid World</p>
        </div>
        <h3
          class="block mt-2 text-base font-medium text-gray-600 truncate pointer-events-none "
        >
          নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
        </h3>
        <p
          class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
        >
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
</template>
