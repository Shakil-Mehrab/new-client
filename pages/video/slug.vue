<template>
  <div class="-mt-2">
    <div class="mb-2 aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/BnZOIkNgVl8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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
