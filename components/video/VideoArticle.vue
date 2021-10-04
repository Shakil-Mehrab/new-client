<template>
  <div class="flex flex-wrap 2md:block">
    <div
      class="w-6/12 py-1  md:py-3 odd:pr-1 even:pl-1 md:odd:pr-3 md:even:pl-3 2md:w-full 2md:even:pl-0 2md:odd:pr-0 2md:border-b 2md:block 2md:first:pt-0"
      v-for="n in news"
      :key="n"
    >
      <nuxt-link to="video/slug">
        <div
          class="grid grid-cols-12 gap-1 rounded-md shadow-sm 2md:shadow-none"
        >
          <div class="relative col-span-12 2md:col-span-4">
            <img
              src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
              alt=""
              class="w-full"
            />
            <PlayButton />
          </div>
          <div class="col-span-12 p-2 2md:col-span-8 2md:p-0">
            <h3 class="title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h3>
            <p class="detail">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ আগুন দেয়ার অভিযোগ
            </p>
          </div>
        </div>
      </nuxt-link>
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
