<template>
  <div class="grid grid-cols-12 gap-2">
    <div
      class="col-span-6 border border-b-0 border-gray-100 rounded-md shadow-sm"
      v-for="n in news"
      :key="n"
    >
      <a href="">
        <div class="w-full">
          <img
            src="https://i.picsum.photos/id/839/600/300.jpg?hmac=Dr2iLvJcB1s9FuTCgLzzu6Qkta6FSghc02r5vLvOnu4"
            alt=""
            class="w-full"
          />
        </div>
        <div class="w-full p-2">
          <div class="mb-1 date">
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
          <!-- <p class="detail">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ আগুন দেয়ার অভিযোগ
            </p> -->
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
