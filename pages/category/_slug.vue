<template>
  <main>
    <div class="container mx-auto">
      <div class="w-full px-2">
        <ArticleTop />
      </div>
    </div>

    <div class="container mx-auto mt-2">
      <div class="w-full px-2">
        <ul class="flex justify-between">
          <li
            class="w-full px-2 py-1 text-center text-white bg-red-700 border rounded-md "
          >
            <a href="#">এই মুহূর্তের সর্বশেষ</a>
          </li>
          <li
            class="w-full px-2 py-1 text-center text-white bg-red-700 border rounded-md "
          >
            <a href="#">সর্বাধিক পঠিত</a>
          </li>
        </ul>

        <ArticleSection :news="20" />
      </div>
    </div>
  </main>
</template>
<script>
import ArticleTop from "@/components/article/ArticleTop";
import ArticleSection from "@/components/section/ArticleSection";

export default {
  components: {
    ArticleTop,
    ArticleSection,
  },
};
</script>
