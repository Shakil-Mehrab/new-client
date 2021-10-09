<template>
  <main>
    <AdvertiseItem />

    <!-- top   -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <ArticleTop />
        <div class="mt-2">
          <ArticleSection :news="9" />
        </div>
      </div>
    </div>

    <!-- সর্বশেষ  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="সর্বশেষ" />
        <HeadingList :news="5" />
      </div>
    </div>

    <!-- International -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="আন্তর্জাতিক" />
        <ArticleSection :news="5" />
      </div>
    </div>

    <AdvertiseItem />

    <!-- story  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Stories />
      </div>
    </div>

    <!-- 4 recreation  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="বিনোদন" />
        <ArticleListWithImage :news="4" :detail="true" />
      </div>
    </div>

    <!-- Sports -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="খেলাধুলা" />
        <ArticleSection :news="5" />
      </div>
    </div>

    <!-- English -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <EnglishArtilce :news="5" />
      </div>
    </div>

    <AdvertiseItem />

    <!-- Special News Event  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="বিশেষ খবর" />
        <div class="mb-2">
          <ArticleTop />
        </div>
      </div>
      <div class="w-full px-1">
        <ArticleSliderTwo />
      </div>
    </div>

    <!-- Opinion -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="মতামত" />
        <ArticleSection :news="3" />
      </div>
    </div>

    <!-- News Block -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="নিউজ ব্লক" />
      </div>
      <div class="w-full px-1">
        <ArtilceSlider :news="3" />
      </div>
    </div>

    <AdvertiseItem />
    <!-- video  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="বিশেষ প্রতিবেদনের খবর" />
      </div>
      <div class="w-full px-1">
        <VideoArticle :news="4" />
      </div>
    </div>

    <!-- sidebar Video  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="অনুষ্ঠান" />
        <SidebarVideo :news="5" />
      </div>
    </div>

    <AdvertiseItem />

    <!-- সংবাদ ভিডিও  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="সংবাদ ভিডিও" />
        <NewsVideo :news="3" />
      </div>
    </div>

    <AdvertiseItem />
    <!-- Dbc Special news  -->
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="ডিবিসি বিশেষ খবর" />
        <NewsVideo :news="3" />
      </div>
    </div>
  </main>
</template>

<script>
import ArticleTop from "@/components/article/ArticleTop";
import ArticleTopLeft from "@/components/article/ArticleTopLeft";
import ArticleListWithImage from "@/components/sidebar/ArticleListWithImage";
import ArticleRightList from "@/components/sidebar/ArticleRightList";
import ArticleSliderThree from "@/components/slider/ArticleSliderThree";
import MostPopular from "@/components/sidebar/MostPopular";
import ContactUs from "@/components/sidebar/ContactUs";
import AdvertiseItem from "@/components/advertisement/AdvertiseItem";
import HeadingList from "@/components/sidebar/HeadingList";
import Devider from "@/components/devider/Devider";
import EnglishArtilce from "@/components/english/EnglishArtilce";
import SpecialReport from "@/components/specialReport/SpecialReport";
import ArticleSection from "@/components/section/ArticleSection";
import ArtilceSlider from "@/components/slider/ArtilceSlider";
import ArticleSliderTwo from "@/components/slider/ArticleSliderTwo";
import VideoArticle from "@/components/video/VideoArticle";
import SidebarVideo from "@/components/video/SidebarVideo";
import NewsVideo from "@/components/video/NewsVideo";
import Images from "@/components/images/Images";
import Stories from "@/components/stories/Stories";
import DateTime from "@/components/dateTime/DateTime";

export default {
  components: {
    ArticleTop,
    ArticleTopLeft,
    ArticleListWithImage,
    ArticleRightList,
    AdvertiseItem,
    HeadingList,
    MostPopular,
    ContactUs,
    ArticleSliderThree,
    Devider,
    EnglishArtilce,
    SpecialReport,
    ArticleSection,
    ArtilceSlider,
    ArticleSliderTwo,
    VideoArticle,
    SidebarVideo,
    NewsVideo,
    Images,
    Stories,
    DateTime,
  },
};
</script>
