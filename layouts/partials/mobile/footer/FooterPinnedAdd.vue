<template>
  <div
    class="
      fixed
      w-full
      h-16
      transition-all
      duration-200
      ease-in-out
      transform
      -bottom-16
      z-[9999]
    "
    :class="{ 'bottom-0': footer_pinned }"
  >
    <img
      src="https://i.picsum.photos/id/5/600/352.jpg?hmac=PK5UuyyfQ5ieo5w5axb2dDEPbhtWCVoZhyMn69rjZBo"
      class="w-full rounded-none"
      alt=""
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      footer_pinned: false,
    };
  },
  methods: {
    addScrollListener() {
      let pxTrigger = 0;
      const menuHeight = 64;
      document.addEventListener("scroll", () => {
        const pxFromTop = window.scrollY || window.pageYOffset;
        if (pxFromTop > menuHeight) {
          this.footer_pinned = pxFromTop > pxTrigger;
          pxTrigger = pxFromTop;
        } else {
          this.footer_pinned = false;
        }
      });
    },
  },
  mounted() {
    this.addScrollListener();
  },
};
</script>
