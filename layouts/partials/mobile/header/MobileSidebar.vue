<template>
  <div
    class="fixed inset-0 z-40 flex md:hidden"
    role="dialog"
    aria-modal="true"
  >
    <div
      @click.prevent="closeDrawer"
      class="fixed inset-0 bg-gray-600 bg-opacity-75"
      aria-hidden="true"
    ></div>

    <div class="relative flex flex-col flex-1 w-full py-2 bg-white">
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-0"
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
        <nuxt-link to="/">
          <RedLogo class="w-auto h-12" />
        </nuxt-link>
        <div class="flex-shrink-0">
          <nuxt-link :to="{ name: 'live' }">
            <button
              type="button"
              class="
                relative
                inline-flex
                items-center
                px-1
                pt-0.5
                text-2xl
                font-medium
                text-white
                bg-red-600
                border border-transparent
                rounded-md
                shadow-sm
                hover:bg-red-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-red-500
              "
            >
              LIVE
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="flex-1 h-0 mt-2 overflow-y-auto">
        <nav class="px-2 space-y-1">
          <a
            href="#"
            class="flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md  group"
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

          <div class="group" v-for="m in 5" :key="m">
            <a
              href="#"
              class="flex items-center justify-between px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:text-gray-900 group"
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
              <!-- <div class="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-4 h-4 mr-4 text-gray-400 group-hover:text-gray-500"
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
              </div> -->
            </a>
            <div
              class="ml-4 transition-all ease-in-out transform  duration-600 group-hover:visible group-hover:h-full"
            >
              <nuxt-link
                :to="{ name: 'category-slug', params: { slug: n } }"
                class="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md  hover:text-gray-900 group"
                :class="{ 'bg-gray-100': isSlug == n }"
                v-for="n in 4"
                :key="n"
                @click.prevent="closeDrawer"
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
                Sub Team
              </nuxt-link>
            </div>
          </div>
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
  data() {
    return {
      isSlug: this.$route.params.slug,
    };
  },
  watch: {
    "$route.params"(params) {
      this.isSlug = params.slug;
    },
  },
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
