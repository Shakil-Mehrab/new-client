<template>
  <div class="w-full xl:mt-0">
    <div
      class="flex items-center justify-between py-0.5 border-b first:pt-0"
      v-for="n in 5"
      :key="n"
    >
      <div class="px-1">
        <ColoredKicker class="mb-1" />
        <a href="block">
          <h4 class="title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
          <div class="mt-1">
            <Date />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Date from "@/components/date/Date";
import ColoredKicker from "@/components/kicker/ColoredKicker";
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
    ColoredKicker,
  },
};
</script>
