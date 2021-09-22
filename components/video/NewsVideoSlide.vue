<template>
  <div>
    <div class="relative h-full rounded-md shadow sm:mb-6 sm:shadow-none">
      <a href="">
        <div class="relative">
          <img
            src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
            alt=""
            class="w-full"
          />

          <div class="absolute text-red-700 bottom-1 left-1 rounded-tr-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bg-white rounded-full w-7 h-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- <p class="text-xs">2:34</p> -->
          </div>
        </div>

        <div class="relative w-full">
          <div
            class="left-0 right-0 w-full mx-auto text-center bg-white rounded-md  sm:shadow-md sm:w-10/12 sm:absolute sm:px-4 -bottom-20"
          >
            <div class="justify-center hidden my-4 sm:flex">
              <div
                class="
                  rounded-md
                  bg-red-600
                  text-white text-sm
                  px-4
                  py-2
                  sm:absolute
                  -top-3.5
                  flex
                  justify-center
                  uppercase
                "
              >
                Covid
              </div>
            </div>
            <div class="py-2 sm:my-8">
              <div class="order-2 title-large sm:order-1">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ t
              </div>
              <div class="flex px-2 space-x-2 sm:px-0 sm:justify-center">
                <Date v-if="date" />
                <Time />
              </div>
              <p class="detail">
                দেশে করোনা সংক্রমণের ৫১৮তম দিনে আজ রবিবার (৭ আগস্ট), করোনা
                পরিস্থিতি হয় করোনা করোনা করোনা পরিস্থিতি হয় করোনা করোনা
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import PlayButton from "@/components/video/PlayButton";

export default {
  props: {
    date: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  components: {
    PlayButton,
  },
};
</script>
