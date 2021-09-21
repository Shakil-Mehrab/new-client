
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block p-2 mt-1 mb-2 border border-b-0 rounded-md shadow-md"
      v-for="n in news"
      :key="n"
    >
      <div class="flex">
        <div class="relative w-4/12 mr-3">
          <img
            src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
            alt=""
            class="w-full h-full rounded-md"
          />
          <div
            class="absolute bottom-0 p-1 text-red-700 bg-gray-900 rounded-tr-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div class="w-8/12">
          <h4 class="mt-0 title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
          <div class="flex justify-between">
            <Date />
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
  props: {
    date: {
      required: false,
      type: Boolean,
      default: false,
    },
    news: {
      required: false,
      type: Number,
      default: 5,
    },
  },
  components: {
    Date,
    Time,
  },
};
</script>

