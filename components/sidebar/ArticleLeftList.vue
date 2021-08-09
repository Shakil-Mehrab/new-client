<template>
  <div class="w-full">
    <template v-for="n in 5">
      <ArticleItem :key="n" />
    </template>
  </div>
</template>
<script>
import ArticleItem from "@/components/sidebar/ArticleItem";
export default {
  components: {
    ArticleItem
  }
};
</script>
