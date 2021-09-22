
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block p-2 mt-1 mb-2 border border-b-0 rounded-md shadow"
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
          <PLayButton />
          <div class="absolute text-red-700 bottom-1 left-1 rounded-tr-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bg-white rounded-full w-7 h-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- <p class="text-xs">2:34</p> -->
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
import PlayButton from "@/components/video/PlayButton";

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
    PlayButton,
  },
};
</script>

