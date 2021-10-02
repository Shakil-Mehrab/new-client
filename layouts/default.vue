<template>
  <div>
    <DesktopView v-if="$device.isDesktop"></DesktopView>
    <MobileView v-else class="font-siyamrupali"></MobileView>
  </div>
</template>
<script>
import MobileView from "@/layouts/view/MobileView";
import DesktopView from "@/layouts/view/DesktopView";

export default {
  components: {
    MobileView,
    DesktopView,
  },
};
</script>
