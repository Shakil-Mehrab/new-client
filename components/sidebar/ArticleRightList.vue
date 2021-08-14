<template>
  <ul
    role="list"
    class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8"
  >
    <template v-for="n in 5">
      <ArticleItem :key="n" />
    </template>
  </ul>
</template>
<script>
import ArticleItem from "@/components/sidebar/ArticleItem";
export default {
  components: {
    ArticleItem
  }
};
</script>
