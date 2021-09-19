
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block p-2 mt-1 mb-2 border border-b-0 rounded-md shadow-md"
      v-for="n in news"
      :key="n"
    >
      <div class="flex">
        <div class="w-4/12 mr-3">
          <img
            src="https://asset1.dbcnews.tv/storage/images/0db2f45a-2b9a-4464-96da-88cb9ea79a61.jpg"
            alt=""
            class="w-full h-full rounded-md"
          />
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
</template>
