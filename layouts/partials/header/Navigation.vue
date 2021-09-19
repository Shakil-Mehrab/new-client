<template>
  <section class="my-2 navigation">
    <div class="bg-red-600">
      <div class="container mx-auto">
        <div
          class="flex items-center justify-between h-24 overflow-hidden font-bold text-white uppercase "
        >
          <div class="logo">
            <div class="p-4">
              <img
                src="@/assets/images/dbc/logo-white.PNG"
                alt=""
                class="w-full"
              />
            </div>
          </div>
          <div class="category">
            <div class="flex flex-wrap">
              <div class="p-4 whitespace-nowrap" v-for="n in 8" :key="n">
                Bangladesh
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="search">
            <div class="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
