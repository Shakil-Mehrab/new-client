<template>
  <fragment>
    <Header />
    <Nuxt />
    <Footer />
  </fragment>
</template>
<script>
import Header from "@/layouts/partials/header/Header";
import Footer from "@/layouts/partials/footer/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
