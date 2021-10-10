<template>
  <div class="">
    <carousel
      :perPageCustom="[[350, 1.125]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="true"
      :paginationPadding="2"
      :paginationSize="2"
      class="relative product-slider"
    >
      <slide v-for="n in 4" :key="n" class="px-1">
        <div class="mb-1">
          <ArticleListWithImage :news="2" :detail="true" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import ArticleListWithImage from "@/components/sidebar/ArticleListWithImage";

export default {
  props: {
    perpage: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  components: {
    ArticleListWithImage,
  },
};
</script>
<style>
/* .VueCarousel-navigation-next[data-v-453ad8cd] {
  margin-left: -46px !important;
  opacity: 80%;

} */
</style>

