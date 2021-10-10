
  <template>
  <div class="w-full">
    <a
      href=""
      class="block mt-1 mb-2 border border-b-0 border-gray-100 rounded-md shadow-sm "
      v-for="n in news"
      :key="n"
    >
      <div class="flex before:border-l-2 before:border-red-700">
        <div class="w-4/12 mr-3 space-x-1">
          <img
            src="https://i.picsum.photos/id/633/600/352.jpg?hmac=LTR0-32ho0IYd8Q5kHouAmc5OI25Ux5KL05auEEqt8U"
            alt=""
            class="w-full h-auto ml-1 rounded-md"
          />
        </div>
        <div class="flex flex-col w-8/12 mt-1">
          <h4 class="pr-1 mt-0 title">
            নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
          </h4>
          <div class="flex flex-wrap mt-auto">
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
