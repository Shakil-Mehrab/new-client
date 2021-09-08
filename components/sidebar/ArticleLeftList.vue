<template>
  <div class="flex flex-wrap 2md:block">
    <div
      class="w-6/12 py-1  md:py-3 odd:pr-1 even:pl-1 md:odd:pr-3 md:even:pl-3 2md:w-full 2md:even:pl-0 2md:odd:pr-0 2md:border-b 2md:block 2md:first:pt-0"
      v-for="n in 5"
      :key="n"
    >
      <a href="">
        <div
          class="grid grid-cols-12 gap-2 rounded-md shadow-md 2md:shadow-none"
        >
          <div class="col-span-12 2md:col-span-4">
            <img
              src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
              alt=""
              class="w-full rounded-md"
            />
          </div>
          <div class="col-span-12 p-2 2md:col-span-8 2md:p-0">
            <div class="date 2md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
              >১ ঘন্টা আগে
            </div>
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
};
</script>
