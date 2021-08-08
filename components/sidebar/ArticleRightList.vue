<template>
  <div class="w-full">
    <template v-for="n in 4">
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
