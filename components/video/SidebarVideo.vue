
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block mt-1 mb-2 border border-b-0 border-gray-100 rounded shadow-sm "
      v-for="n in news"
      :key="n"
    >
      <div class="flex">
        <div class="relative w-4/12 mr-2">
          <img
            src="https://i.picsum.photos/id/633/600/352.jpg?hmac=LTR0-32ho0IYd8Q5kHouAmc5OI25Ux5KL05auEEqt8U"
            alt=""
            class="w-full h-full rounded-md rounded-r-none"
          />
          <PlayButton />
        </div>
        <div class="flex flex-col w-8/12 mt-1">
          <h4 class="pr-1 mt-0 title">
            নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
          </h4>
          <div class="flex justify-between mt-auto">
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

