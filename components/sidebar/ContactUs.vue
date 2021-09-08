<template>
  <div class="w-full my-2">
    <div class="my-8">
      <Devider />
    </div>
    <div class="grid grid-rows-2 grid-cols-2 gap-2">
      <div class="bg-red-600 p-4 rounded-md" v-for="n in 4" :key="n">
        <div class="flex w-full items-center text-white">
          <div class="icon bg-red-900 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
          <div class="px-4">
            <h4 class="text-base font-medium">17M</h4>
            <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
