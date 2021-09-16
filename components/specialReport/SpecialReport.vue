<template>
  <div class="flex flex-wrap w-full news-section">
    <div class="w-full bg-gray-100 md:my-3 md:w-6/12">
      <div class="p-3 md:p-6 2md:p-16">
        <button
          class="flex px-4 text-base font-medium text-white uppercase bg-red-600 border-2 rounded-md "
        >
          <span class="mt-1">Covid</span>
        </button>
        <a href="">
          <h4 class="my-6 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
        </a>
        <div class="mb-3">
          <Date />
        </div>
        <p class="text-sm text-gray-500">
          দেশে করোনা সংক্রমণের ৫১৮তম দিনে আজ রবিবার (৭ আগস্ট), করোনা পরিস্থিতি
          নিয়ে স্বাস্থ্য অধিদপ্তর থেকে পাঠানো বিজ্ঞপ্তিতে জানানো হয়, গত ২৪
          ঘণ্টায় সারা দেশে
        </p>
      </div>
    </div>
    <div class="w-full md:my-3 md:w-6/12">
      <a href="">
        <img
          src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
          alt=""
          class="h-full"
        />
      </a>
    </div>
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

