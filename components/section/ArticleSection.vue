
  <template>
  <div class="w-full xl:mt-0">
    <a
      href=""
      class="block mt-1 mb-2 border border-b-0 border-gray-100 rounded-md shadow-sm "
      v-for="n in news"
      :key="n"
    >
      <div class="flex before:border-l-2 before:border-red-700">
        <div class="flex w-4/12 mr-3 space-x-1">
          <!-- <div class="inline-block w-0.5 border-l-2 border-red-700"></div> -->
          <img
            src="https://i.picsum.photos/id/1069/600/300.jpg?hmac=xUqRdpwKgIa_i6muDOCha4JN9Emhvi7GTfxrdVht77g"
            alt=""
            class="h-full ml-1 rounded-md"
          />
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
