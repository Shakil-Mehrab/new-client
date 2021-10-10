<template>
  <div class="flex flex-wrap">
    <div class="w-6/12 p-1" v-for="n in news" :key="n">
      <nuxt-link
        to="video/slug"
        class="block h-full border border-b-0 border-gray-100 rounded-md shadow-sm "
      >
        <div class="grid grid-cols-12">
          <div class="relative col-span-12">
            <img
              src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
              alt=""
              class="w-full"
            />
            <PlayButton />
          </div>
          <div class="col-span-12 p-2">
            <h3 class="title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h3>
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
