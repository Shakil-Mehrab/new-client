<template>
  <div class="relative -mt-4">
    <div :class="{ 'video-fixed': live_fixed }">
      <div
        class="mb-2 aspect-w-16 aspect-h-9"
        :class="{ 'live-video-fixed live-video-protrait': live_fixed }"
      >
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
    </div>
    <div class="container mx-auto mb-2 mt-7">
      <div class="w-full px-2">
        <Devider title="সর্বশেষ" />
        <SidebarVideo :news="20" />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarVideo from "@/components/video/SidebarVideo";
export default {
  data() {
    return {
      live_fixed: false,
    };
  },
  components: {
    SidebarVideo,
  },
  methods: {
    addScrollListener() {
      let pxTrigger = 0;
      const menuHeight = 140;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > menuHeight) {
          this.live_fixed = true;
          console.log("hi");
        } else {
          this.live_fixed = false;
        }
      });
    },
  },
  mounted() {
    this.addScrollListener();
  },
};
</script>
