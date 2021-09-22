<template>
  <div class="">
    <carousel
      :perPageCustom="[[350, 1.5]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="false"
      :paginationPadding="4"
      :paginationSize="4"
      :navigationClickTargetSize="20"
      class="relative product-slider"
    >
      <slide v-for="n in 4" :key="n" class="px-2">
        <NewsVideoSlide :date="date" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import NewsVideoSlide from "@/components/video/NewsVideoSlide";
export default {
  props: {
    perpage: {
      required: false,
      type: Number,
      default: 1,
    },
    date: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  components: {
    NewsVideoSlide,
  },
};
</script>
<style>
.product-slider .relative.h-full.rounded-md {
  margin-bottom: 5px;
}
.product-slider .VueCarousel-dot.VueCarousel-dot--active {
  background: red !important;
}
</style>

