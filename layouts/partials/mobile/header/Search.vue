<template>
  <div class="absolute z-30 w-full">
    <div class="relative rounded-md shadow-sm">
      <input
        type="search"
        name="account-number"
        id="account-number"
        class="block w-full px-2 text-xl border border-gray-300 rounded-sm  h-14 focus-visible:outline-none focus:ring-gray-500 focus:border-gray-500"
        placeholder="Search..."
      />
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none "
      >
        <!-- Heroicon name: solid/question-mark-circle -->
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
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
        </svg> -->
      </div>
    </div>
  </div>
</template>
