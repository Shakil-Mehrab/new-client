<template>
  <div
    class="fixed inset-0 z-40 flex md:hidden"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-600 bg-opacity-75"
      aria-hidden="true"
    ></div>

    <div class="relative flex flex-col flex-1 w-full max-w-xs py-2 bg-white">
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click.prevent="closeDrawer"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center justify-between flex-shrink-0 px-4">
        <RedLogo class="w-auto h-12" />
        <div class="flex-shrink-0">
          <a href="">
            <button
              type="button"
              class="relative inline-flex items-center px-1 text-2xl font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              LIVE
            </button>
          </a>
        </div>
      </div>
      <div class="flex-1 h-0 mt-2 overflow-y-auto">
        <nav class="px-2 space-y-1">
          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-900 bg-gray-100 rounded-md  group"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </a>

          <div class="h-8">
            <a
              href="#"
              class="flex items-center justify-between px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
            >
              <div class="flex">
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>Team</span>
              </div>
              <div class="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-4 h-4 mr-4 text-gray-400  group-hover:text-gray-500"
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
            </a>
            <div class="ml-4">
              <a
                href="#"
                class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
                v-for="n in 10"
                :key="n"
              >
                <svg
                  class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Team
              </a>
            </div>
          </div>

          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            Projects
          </a>

          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Calendar
          </a>

          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Documents
          </a>

          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:bg-gray-50 hover:text-gray-900 group"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 mr-4 text-gray-400  group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Reports
          </a>
        </nav>
      </div>
    </div>
    <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RedLogo from "@/layouts/logo/RedLogo";

export default {
  components: {
    RedLogo,
  },
  methods: {
    ...mapActions({
      closeDrawer: "drawer/close",
    }),
  },

  computed: {
    ...mapGetters({
      isOpen: "drawer/isOpen",
    }),
  },
};
</script>
