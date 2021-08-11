<template>
  <header>
    <!-- top header  -->
    <TopHeader />
    <!-- banner  -->
    <AdvertiseItem />
    <!-- navigation  -->
    <!-- <Navigation /> -->
  </header>
</template>
<script>
import AdvertiseItem from "@/components/Advertisement/AdvertiseItem";
import Navigation from "@/layouts/partials/header/Navigation";
import TopHeader from "@/layouts/partials/header/TopHeader";

export default {
  components: {
    AdvertiseItem,
    Navigation,
    TopHeader
  }
};
</script>
