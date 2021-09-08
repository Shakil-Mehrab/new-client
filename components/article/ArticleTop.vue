<template>
  <div class="relative h-full mb-2 rounded-md shadow-md sm:mb-6 sm:shadow-none">
    <a href="">
      <div class="overflow-hidden rounded-t-md sm:rounded-md">
        <img
          src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
          alt=""
          class="w-full"
        />
      </div>

      <div class="relative w-full">
        <div
          class="left-0 right-0 w-full mx-auto text-center bg-white rounded-md  sm:shadow-md sm:w-10/12 sm:absolute sm:px-4 -bottom-20"
        >
          <div class="justify-center hidden my-4 sm:flex">
            <div
              class="
                rounded-md
                bg-red-600
                text-white text-sm
                px-4
                py-2
                sm:absolute
                -top-3.5
                flex
                justify-center
                uppercase
              "
            >
              Covid
            </div>
          </div>
          <div class="mt-4 sm:my-8">
            <div class="order-2 title-large sm:order-1">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </div>
            <div class="flex px-2 space-x-2 sm:px-0 sm:justify-center">
              <Date />
              <Time />
            </div>
            <p class="detail">
              দেশে করোনা সংক্রমণের ৫১৮তম দিনে আজ রবিবার (৭ আগস্ট), করোনা
              পরিস্থিতি হয় করোনা করোনা করোনা পরিস্থিতি হয় করোনা করোনা
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Date from "@/components/date/Date";
import Time from "@/components/date/Time";

export default {
  components: {
    Date,
    Time,
  },
};
</script>
