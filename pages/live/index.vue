<template>
  <div class="-mt-4">
    <div class="mb-2 aspect-w-16 aspect-h-9">
      <iframe
        class="live-video"
        name="ifram2"
        src="https://www.mcaster.tv/channel/dbcnews.php?u=dbcnews&amp;vw=100%&amp;vh=360"
        frameborder="0"
        scrolling="no"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="container mx-auto mb-2 mt-7">
      <div class="w-full px-2">
        <Devider title="সর্বশেষ" />
        <SidebarVideo :news="5" />
      </div>
    </div>
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
