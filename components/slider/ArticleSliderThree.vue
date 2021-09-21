<template>
  <div class="">
    <carousel
      :perPageCustom="[[350, 1]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="true"
      :paginationPadding="4"
      :paginationSize="4"
      :navigationClickTargetSize="20"
      class="relative product-slider"
    >
      <slide v-for="n in 4" :key="n" class="px-1">
        <div>
          <TrendingPoll :news="2" :detail="true" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import TrendingPoll from "@/components/sidebar/TrendingPoll";
export default {
  props: {
    perpage: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  components: {
    TrendingPoll,
  },
};
</script>
<style>
.VueCarousel-navigation-next[data-v-453ad8cd] {
  left: 290px !important;
  border: 1px solid gray;
  background: gray;
  opacity: 80%;
  /* :navigationEnabled="true" */
}
</style>

