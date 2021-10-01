<template>
  <div class="w-full">
    <div class="sm:my-6">
      <div class="relative mx-1">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex items-center justify-between">
          <span
            class="pr-2 text-lg font-bold tracking-wider text-red-700  bg-gray-50 md:text-xl whitespace-nowra"
          >
            English
          </span>
          <button
            type="button"
            class="
              inline-flex
              items-center
              pl-2
              py-1.5
              text-sm
              leading-5
              font-medium
              text-gray-500
              bg-gray-50
              hover:text-gray-700
            "
          >
            <a href="" class="tracking-wider">See More</a>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="px-1">
        <div class="w-full xl:mt-0">
          <div class="py-2 border-b-2" v-for="n in 5" :key="n">
            <a href="">
              <h4 class="title">
                Allegedly pouring petrol on the woman's body and setting it on
                fire
              </h4>
              <div class="flex justify-between mt-1">
                <p class="flex items-center my-1 date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-5 h-5 mr-1"
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
                  ><span> Tuesday, June 29, 2021 </span>
                </p>
                <p class="flex items-center my-1 date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-5 h-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>8:20 AM</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Date from "@/components/date/Date";
import Time from "@/components/date/Time";

export default {
  props: {
    date: {
      required: false,
      type: Boolean,
      default: false,
    },
    news: {
      required: false,
      type: Number,
      default: 5,
    },
  },
  components: {
    Date,
    Time,
  },
};
</script>

