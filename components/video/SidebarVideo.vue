
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block mt-1 mb-2 border border-b-0 rounded-md shadow"
      v-for="n in news"
      :key="n"
    >
      <div class="flex">
        <div class="relative w-4/12 mr-3">
          <img
            src="https://i.picsum.photos/id/828/600/300.jpg?hmac=se7MuHbr2rWGsfM-LFl0pN3aN_1kqs8Xbftdmc84j4g"
            alt=""
            class="w-full h-full rounded-md"
          />
          <PlayButton />
        </div>
        <div class="w-8/12 mt-1">
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

