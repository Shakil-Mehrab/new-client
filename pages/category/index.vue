<template>
  <main>
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="px-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-10/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <!-- <div
                class="order-2 col-span-12 sm:mt-12 2md:mt-0 2md:col-span-5 2md:order-1"
              >
                <ArticleListWithImage :news="4" :detail="true" />
              </div> -->
              <div
                class="order-1 col-span-12 rounded-md  2md:col-span-7 2md:order-1"
              >
                <ArticleTop />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <!-- <div class="order-3 w-full xl:w-2/12">
            <HeadingList :news="5" />
          </div> -->
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-3 sm:px-6 lg:px-8 md:hidden">
      <div class="px-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full mt-1">
            <div class="sm:my-6">
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
            </div>
            <div class="w-full">
              <div class="">
                <ArticleSection :news="20" />
              </div>
            </div>
          </div>
        </div>
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
