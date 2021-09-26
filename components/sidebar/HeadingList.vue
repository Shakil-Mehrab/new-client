<template>
  <div class="w-full xl:mt-0">
    <div
      class="flex items-center justify-between py-3 border-b-2 first:pt-0"
      v-for="n in 5"
      :key="n"
    >
      <div class="">
        <ColoredKicker />
        <a href="">
          <h4 class="mt-3 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
          <div class="mt-2">
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
