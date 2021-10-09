<template>
  <div class="h-full border border-b-0 border-gray-100 rounded-md shadow-sm">
    <nuxt-link :to="{ name: 'news-slug' }">
      <div class="">
        <img
          src="https://i.picsum.photos/id/1/600/352.jpg?hmac=KsMMAbhdaq2gklyc1QGAAqD_vl9K-sbylgzAC3Zu0ac"
          alt=""
          class="w-full"
        />
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
    </nuxt-link>
  </div>
</template>

<script>
import Date from "@/components/date/Date";
import Time from "@/components/date/Time";

export default {
  components: {
    Date,
    Time,
  },
};
</script>
