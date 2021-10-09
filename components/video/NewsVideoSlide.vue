<template>
  <div>
    <div
      class="relative h-full border border-b-0 border-gray-100 rounded-md shadow-sm "
    >
      <a href="">
        <div class="relative">
          <img
            src="https://i.picsum.photos/id/866/600/300.jpg?hmac=Zlb4VEJZKg8E6U7UZGt9Mq8Ly0cZsb8ZloMpw_5WB2M"
            alt=""
            class="w-full"
          />

          <PlayButton />
        </div>
        <div class="w-full">
          <div class="w-full mx-auto">
            <div class="px-2 pt-3 pb-2">
              <div class="title-large">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ t
              </div>
              <div class="flex space-x-2">
                <Date />
                <Time />
              </div>
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
