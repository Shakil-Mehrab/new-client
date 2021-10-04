<template>
  <div class="-mt-2">
    <div class="mb-1 video-container">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/BnZOIkNgVl8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>
    <div class="container mx-auto mb-2 sm:px-6 lg:px-8 md:hidden">
      <div class="px-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="অনুষ্ঠান" />
            </div>
            <div class="w-full">
              <div class="">
                <SidebarVideo :news="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container mx-auto mb-2 sm:px-6 lg:px-8">
      <div class="px-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">

          <div class="w-full xl:w-10/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <div
                class="order-2 col-span-12 sm:mt-12 2md:mt-0 2md:col-span-5 2md:order-1"
              >
                <VideoArticle :news="20" :detail="true" />
              </div>
              <div
                class="order-1 col-span-12 rounded-md 2md:col-span-7 2md:order-1"
              >
                <ArticleTop />
              </div>
            </div>
          </div>
          <div class="order-3 w-full xl:w-2/12">
            <HeadingList :news="5" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import SidebarVideo from "@/components/video/SidebarVideo";
export default {
  components: {
    SidebarVideo,
  },
};
</script>
