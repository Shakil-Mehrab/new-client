<template>
  <div class="">
    <carousel
      :perPageCustom="[[350, 1.25]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="false"
      class="relative product-slider"
    >
      <slide v-for="n in 4" :key="n" class="px-1">
        <div>
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


