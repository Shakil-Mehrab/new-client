<template>
  <div class="-mt-2">
    <div
      :class="
        live_fixed
          ? 'video-fixed fixed  translate-y-full transform transition-all ease-in-out duration-1000 right-2 z-[99999] rounded-md overflow-hidden'
          : ''
      "
    >
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UhPXVH6nmpE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="container mx-auto mb-2">
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
