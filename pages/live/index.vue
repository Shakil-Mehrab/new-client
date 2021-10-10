<template>
  <div class="-mt-2">
    <div class="mb-2 aspect-w-16 aspect-h-9">
      <iframe
        name="ifram2"
        src="https://www.mcaster.tv/channel/dbcnews.php?u=dbcnews&amp;vw=100%&amp;vh=640"
        height="640"
        width="100%"
        frameborder="0"
        scrolling="no"
        allowfullscreen=""
      ></iframe>
    </div>
    <div class="container mx-auto mb-2">
      <div class="w-full px-2">
        <Devider title="অনুষ্ঠান" />
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
