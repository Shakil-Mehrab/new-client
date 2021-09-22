<template>
  <div class="flex flex-wrap 2md:block">
    <div
      class="
        w-6/12
        py-1
        md:py-3
        odd:pr-1
        even:pl-1
        md:odd:pr-3
        md:even:pl-3
        2md:w-full
        2md:even:pl-0
        2md:odd:pr-0
        2md:border-b
        2md:block
        2md:first:pt-0
      "
      v-for="n in news"
      :key="n"
    >
      <a href="">
        <div class="grid grid-cols-12 gap-1 rounded-md shadow 2md:shadow-none">
          <div class="relative col-span-12 2md:col-span-4">
            <img
              src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
              alt=""
              class="w-full"
            />

            <div class="absolute text-red-700 bottom-1 left-1 rounded-tr-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 bg-white rounded-full"
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
          <div class="col-span-12 p-2 2md:col-span-8 2md:p-0">
            <h3 class="title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h3>
            <p class="detail">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ আগুন দেয়ার অভিযোগ
            </p>
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
    detail: {
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
    PlayButton,
  },
};
</script>
