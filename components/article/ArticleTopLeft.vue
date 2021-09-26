<template>
  <div class="relative h-full mb-6 rounded-md shadow sm:shadow-none">
    <a href="">
      <div class="">
        <img
          src="https://i.picsum.photos/id/4/600/352.jpg?hmac=PXDqnUdxK05XvdLgkYExDtxfVDCes1vPgr30sizy5-A"
          alt=""
          class="w-full"
        />
      </div>
      <div class="p-2 border-b sm:p-0">
        <a href="">
          <ColorlessKicker />
          <h3 class="my-3 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h3>
          <Date />
        </a>
      </div>
    </a>

    <div class="p-2 border-b sm:p-0" v-for="n in 2" :key="n">
      <a href="">
        <ColorlessKicker />
        <h3 class="my-3 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h3>
        <Date />
      </a>
    </div>
  </div>
</template>
<script>
import Date from "@/components/date/Date";
import ColorlessKicker from "@/components/kicker/ColorlessKicker";

export default {
  components: {
    Date,
    ColorlessKicker,
  },
};
</script>
