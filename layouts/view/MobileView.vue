<template>
  <div class="bg-red-700">
    <MobileHeader />
    <nuxt />
    <MobileFooter />
    <!-- <BottomBannerSticky /> -->
  </div>
</template>
<script>
import MobileHeader from "~/components/partials/header/MobileHeader";
import MobileFooter from "~/components/partials/footer/MobileFooter";

export default {
  components: {
    MobileHeader,
    MobileFooter,
  },
};
</script>
