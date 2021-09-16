
  <template>
  <div class="w-full xl:mt-0">
    <div class="py-3 border-b-2 first:pt-0" v-for="n in 5" :key="n">
      <a href="">
        <h4 class="title">নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ</h4>
        <div class="flex justify-between mt-2">
          <Date />
          <Time />
        </div>
      </a>
    </div>
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
