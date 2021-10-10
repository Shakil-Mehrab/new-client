<template>
  <div>
    <div
      class="fixed w-full h-16 transition-all duration-200 ease-in-out transform  -top-32 mobile-header"
      :class="{ 'top-0': pinned }"
    >
      <!--  -->
      <div class="relative">
        <Search
          :class="
            isSearch
              ? 'top-16 transform transition-all ease-in duration-600'
              : 'top-0 transform transition-all ease-out duration-600'
          "
        />
        <div
          class="relative flex mb-2 overflow-hidden bg-red-100 shadow-md  mobile-sidebar"
        >
          <!-- navigation bar  -->
          <div class="flex flex-col flex-1 w-0 overflow-hidden">
            <div
              class="relative z-10 flex justify-between flex-shrink-0 h-16 px-2 bg-red-700 shadow "
            >
              <button
                @click.prevent="openDrawer"
                type="button"
                class="flex items-center w-8 h-8 my-auto text-white rounded-md  focus:outline-none"
              >
                <svg
                  class="w-full"
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
              <div class="flex items-center">
                <nuxt-link to="/" class="block">
                  <WhiteLogo class="w-auto h-16" />
                </nuxt-link>
              </div>
              <div class="flex items-center text-white">
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  @click.prevent="openSearch"
                  v-if="!isSearch"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  @click.prevent="closeSearch"
                  v-else
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative flex mb-2 overflow-hidden bg-gray-100 shadow-md  mobile-sidebar"
    >
      <!-- sidebar  -->
      <MobileSidebar
        :class="
          isOpen
            ? 'ml-0  transform transition-all ease-in duration-600'
            : 'hide-left transform transition-all ease-out duration-600'
        "
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import MobileSidebar from "@/layouts/partials/mobile/header/MobileSidebar";
import Search from "@/layouts/partials/mobile/header/Search";
import WhiteLogo from "@/layouts/logo/WhiteLogo";

export default {
  data() {
    return {
      pinned: true,
    };
  },
  components: {
    MobileSidebar,
    WhiteLogo,
    Search,
  },

  methods: {
    addScrollListener() {
      let pxTrigger = 0;
      const menuHeight = 64;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > menuHeight) {
          this.pinned = pxFromTop < pxTrigger;
          pxTrigger = pxFromTop;
        } else {
          this.pinned = true;
        }
        // console.log(pxFromTop);
      });
    },
    ...mapActions({
      openDrawer: "drawer/open",
      closeDrawer: "drawer/close",
      openSearch: "search/openSearch",
      closeSearch: "search/closeSearch",
    }),
  },
  mounted() {
    this.addScrollListener();
  },
  computed: {
    ...mapGetters({
      isOpen: "drawer/isOpen",
      isSearch: "search/isSearch",
    }),
  },
};
</script>


