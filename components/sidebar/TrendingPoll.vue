<template>
  <div class="p-2 bg-white border rounded-md shadow-md">
    <a href="">
      <div class="">
        <img src="@/assets/images/dbc/cow.png" alt="" class="w-full" />
      </div>
      <div class="px-4">
        <ColorlessKicker class="mb-1" />
        <h4 class="my-3 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
        <Date />
      </div>
    </a>
    <div class="px-4">
      <div class="w-full p-2 my-2 bg-gray-100 rounded-md">
        <input type="radio" value="India" /> India
      </div>
      <div class="w-full p-2 my-2 bg-gray-100 rounded-md">
        <input type="radio" value="Banglasesh" /> Banglasesh
      </div>
      <button
        class="flex px-4 ml-auto text-base font-medium uppercase border-2 border-red-600 rounded-md "
      >
        <span class="mt-1"> Vote</span>
      </button>
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
