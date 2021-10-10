<template>
  <div class="pt-16 font-solaimanlipi">
    <MobileHeader />
    <nuxt />
    <MobileFooter />
  </div>
</template>
<script>
import MobileHeader from "@/layouts/partials/mobile/header/MobileHeader";
import MobileFooter from "@/layouts/partials/mobile/footer/MobileFooter";

export default {
  components: {
    MobileHeader,
    MobileFooter,
  },
};
</script>
