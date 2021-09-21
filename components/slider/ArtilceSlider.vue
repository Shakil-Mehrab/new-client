<template>
  <div class="">
    <carousel
      :perPageCustom="[[350, perpage]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="true"
      :paginationPadding="4"
      :paginationSize="4"
      :navigationClickTargetSize="20"
      class="relative product-slider"
    >
      <slide v-for="n in 4" :key="n" class="px-2">
        <div>
          <ArticleTop />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import ArticleTop from "@/components/article/ArticleTop";
export default {
  props: {
    perpage: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  components: {
    ArticleTop,
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

