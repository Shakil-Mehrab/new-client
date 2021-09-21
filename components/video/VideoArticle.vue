<template>
  <div class="flex flex-wrap 2md:block">
    <div
      class="w-6/12 py-1  md:py-3 odd:pr-1 even:pl-1 md:odd:pr-3 md:even:pl-3 2md:w-full 2md:even:pl-0 2md:odd:pr-0 2md:border-b 2md:block 2md:first:pt-0"
      v-for="n in news"
      :key="n"
    >
      <a href="">
        <div
          class="grid grid-cols-12 gap-1 rounded-md shadow-md 2md:shadow-none"
        >
          <div class="relative col-span-12 2md:col-span-4">
            <img
              src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
              alt=""
              class="w-full"
            />
            <div
              class="absolute bottom-0 p-1 text-red-700 bg-gray-900  rounded-tr-md"
            >
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
export default {
  props: {
    detail: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  props: {
    news: {
      required: false,
      type: Number,
      default: 5,
    },
  },
};
</script>
