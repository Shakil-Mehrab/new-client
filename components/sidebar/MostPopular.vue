<template>
  <div class="w-full shadow-md rounded-md">
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
    <div class="p-2">
      <!-- <div class="figure relative w-3/12 rounded-md overflow-hidden">
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
      </div> -->

      <ul
        role="list"
        class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8"
      >
        <li
          class="relative grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8 border-b-2"
          v-for="n in 4"
          :key="n"
        >
          <div
            class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              alt=""
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details for IMG_4985.HEIC</span>
            </button>
          </div>
          <div>
            <div class="flex w-full my-4 sm:my-0">
              <p class="text-gray-500 text-sm uppercase font-medium">
                Covid
              </p>
            </div>
            <p
              class="mt-2 block text-base font-medium text-gray-600 truncate pointer-events-none"
            >
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </p>
            <p
              class="block text-sm font-medium text-gray-500 pointer-events-none my-4"
            >
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
        </li>
      </ul>
    </div>
  </div>
</template>
