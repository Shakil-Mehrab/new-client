<template>
  <main>
    <!-- top section  -->
    <section class="top-news-section my-4">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="w-4/12 px-2 my-2">
            <ArticleLeftList />
          </div>
          <div class="mid w-8/12 px-2 my-2">
            <ArticleTop />
          </div>
          <div class="w-4/12 px-2 my-2">
            <ArticleRightList />
          </div>
        </div>
      </div>
    </section>
    <!-- covid section  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="bg-red-100 p-4">
          <div class="w-10/12 mx-auto">
            <div class="flex w-full justify-center items-center">
              <div class="left-side w-3/12 px-2 my-2">
                <div class="fugure">
                  <img
                    src="~/assets/images/dbc/covid.PNG"
                    alt=""
                    clall="w-full"
                  />
                </div>
              </div>
              <div class="right-side w-9/12 px-2 my-2">
                <div class="flex w-full">
                  <div class="detail px-2" v-for="n in 4" :key="n">
                    <h4 class="text-base font-medium text-gray-700">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-sm text-gray-500">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে
                      পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- banner  -->
    <AdvertiseItem />
    <!-- Inter national  -->
    <section class="International my-4">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="left-side w-8/12 px-2 my-2">
            <Heading />
            <div class="news-section flex w-full">
              <div class="left-most w-6/12 my-2 pr-2">
                <div class="top-news">
                  <div class="figure">
                    <img src="~/assets/images/dbc/topint.png" alt="" />
                  </div>
                  <div class="detail border-b-2 py-2" v-for="n in 2" :key="n">
                    <p class="text-base font-medium text-gray-500 uppercase">
                      Covid world
                    </p>
                    <h4 class="text-base font-medium text-gray-700 my-2">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-base font-medium text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        /></svg
                      >Tuesday, June 29, 2021
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-6/12 px-2">
                <ArticleRightList />
              </div>
            </div>
          </div>
          <div class="right-side w-4/12 px-2 my-12 relative">
            <div class="border-4 border-gray-700 rounded-xl p-4">
              <div class="my-8">
                <ArticleHeadingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- subscribe  -->
    <section class="Subscribe my-4">
      <div class="container mx-auto">
        <div class="subscribe-bg-img bg-red-600 rounded-xl overflow-hidden">
          <div class=" flex items-center px-12 py-12 w-full">
            <div class="w-6/12 my-2 px-2">
              <h4 class="text-2xl font-medium text-white">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
              </h4>
              <p class="text-base font-medium text-white my-2">
                গত ২৪ ঘণ্টায় করোনায় শনাক্ত হয়েছেন ১০ হাজার ২৯৯ জন। এ নিয়ে দেশে
                করোনায় শনাক্তের সংখ্যা দাঁড়ালো ১৩ লাখ ৫৩ হাজার ৬৯৫ জন।
              </p>
            </div>
            <div class="w-6/12 my-2 px-2">
              <div class="flex items-center w-full">
                <input
                  type="text"
                  class="w-full h-12 mx-2 rounded-md bg-red-500 text-white px-4 focus:border-none"
                  placeholder="Enter Your Email"
                />
                <button
                  class="text-base font-medium text-red-600 bg-white h-12 rounded-md px-4"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Ceremony  -->
    <section class="International my-4">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="left-side w-8/12 px-2 my-2">
            <Heading />
            <div class="news-section flex w-full">
              <div class="left-most w-6/12 my-2 pr-2">
                <ArticleTop />
              </div>
              <div class="w-6/12 px-2">
                <ArticleRightList />
              </div>
            </div>
          </div>
          <div class="right-side w-4/12 px-2 my-12 relative">
            <div class="border-4 border-gray-700 rounded-xl p-4">
              <div class="my-8">
                <ArticleHeadingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArticleTop from "@/components/article/ArticleTop";
import ArticleLeftList from "@/components/sidebar/ArticleLeftList";
import ArticleRightList from "@/components/sidebar/ArticleRightList";
import AdvertiseItem from "@/components/Advertisement/AdvertiseItem";
import ArticleHeadingList from "@/components/sidebar/ArticleHeadingList";
import Heading from "@/components/heading/Heading";

export default {
  components: {
    ArticleTop,
    ArticleLeftList,
    ArticleRightList,
    AdvertiseItem,
    ArticleHeadingList,
    Heading
  }
};
</script>
