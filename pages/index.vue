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
            <div class="my-2 relative w-full">
              <div class="figure w-full">
                <img
                  src="~/assets/images/dbc/topsectionmid.png"
                  alt=""
                  clall="w-full"
                />
              </div>
              <div
                class="detail absolute top-64 left-0 right-0 w-10/12 mx-auto px-4 text-center bg-white rounded-md"
              >
                <div class="flex justify-center ">
                  <p
                    class="bg-red-600 text-white text-sm px-4 py-2 rounded-md absolute -top-3.5 flex justify-center uppercase"
                  >
                    Covid
                  </p>
                </div>
                <div class="my-8">
                  <h4 class="text-base font-medium text-gray-700">
                    নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                  </h4>
                  <p class="my-4 text-sm text-gray-500">
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
                  <p class="text-sm text-gray-500">
                    দেশে করোনা সংক্রমণের ৫১৮তম দিনে আজ রবিবার (৭ আগস্ট), করোনা
                    পরিস্থিতি নিয়ে স্বাস্থ্য অধিদপ্তর থেকে পাঠানো বিজ্ঞপ্তিতে
                    জানানো হয়, গত ২৪ ঘণ্টায় সারা দেশে নমুনা সংগ্রহ করা হয়েছে ৪০
                    হাজার ১৩০টি। আর দেশের মোট ৭০৭টি ল্যাবে অ্যান্টিজেন টেস্টসহ
                    ২৪ ঘণ্টায় নমুনা পরীক্ষা করা হয়েছে ৪২ হাজার ৩টি। এর মধ্যে ১০
                    হাজার ২৯৯ জনের দেহে করোনার উপস্থিতি পাওয়া গেছে
                  </p>
                </div>
              </div>
            </div>
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
          <div class="left-side w-8/12 px-2 my-4">
            <div class="categroy-heading flex w-full items-baseline">
              <div class="heading text-4xl text-gray-700">আন্তর্জাতিক</div>
              <div
                class="cat-side-border bg-gray-300 w-full h-1 rounded-md mx-4"
              ></div>
            </div>
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
          <div class="right-side w-4/12 mt-12 relative">
            <div class="border-4 border-gray-700 rounded-xl p-4">
              <div class="flex justify-center">
                <div
                  class="absolute-part absolute -top-12 bg-gray-100 border m-4 p-4"
                >
                  <h4 class="text-4xl text-gray-700">
                    আন্তর্জাতিক
                  </h4>
                </div>
              </div>
              <div class=" mt-16">
                <div
                  class="border-b-2 flex justify-between items-center"
                  v-for="n in 4"
                  :key="n"
                >
                  <div class="detail">
                    <p class="text-base font-medium text-gray-500 my-2">
                      <span class="bg-red-600 w-4 h-1 inline-block"></span>
                      <span class="text-red-600">Covid</span>
                    </p>
                    <h4 class="text-base font-medium text-gray-700">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-base font-medium text-gray-500 my-2">
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
                  <div class="number">
                    <span class="text-6xl font-medium text-gray-500">{{
                      n
                    }}</span>
                  </div>
                </div>
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
          <div class=" flex px-12 py-12 w-full">
            <div class="m-2 p-2 w-6/12">
              <h4 class="text-2xl font-medium text-white">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
              </h4>
              <p class="text-base font-medium text-white my-2">
                গত ২৪ ঘণ্টায় করোনায় শনাক্ত হয়েছেন ১০ হাজার ২৯৯ জন। এ নিয়ে দেশে
                করোনায় শনাক্তের সংখ্যা দাঁড়ালো ১৩ লাখ ৫৩ হাজার ৬৯৫ জন।
              </p>
            </div>
            <div class="flex items-center m-2 p-2 w-6/12">
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
    </section>
    <!-- Ceremony  -->
    <section class="International my-4">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="left-side w-8/12">
            <div class="categroy-section p-2 m-2 flex w-full items-baseline">
              <div class="heading text-4xl text-gray-700">আন্তর্জাতিক</div>
              <div
                class="cat-side-border bg-gray-300 w-full h-1 rounded-md mx-4"
              ></div>
            </div>
            <div class="news-section flex w-full">
              <div class="left-most w-8/12">
                <div class="p-2 m-2 relative">
                  <div class="figure w-full">
                    <img
                      src="~/assets/images/dbc/topsectionmid.png"
                      alt=""
                      clall="w-full"
                    />
                  </div>
                  <div
                    class="detail absolute -bottom-16 mx-12 p-4 text-center bg-white rounded-md"
                  >
                    <div class="flex justify-center ">
                      <p
                        class="bg-red-600 text-white text-sm px-4 py-2 rounded-md absolute -top-3.5 flex justify-center uppercase"
                      >
                        Covid
                      </p>
                    </div>
                    <h4 class="text-base font-medium text-gray-700 mt-4">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="my-4 text-sm text-gray-500">
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
                    <p class="text-sm text-gray-500">
                      দেশে করোনা সংক্রমণের ৫১৮তম দিনে আজ রবিবার (৭ আগস্ট), করোনা
                      পরিস্থিতি নিয়ে স্বাস্থ্য অধিদপ্তর থেকে পাঠানো বিজ্ঞপ্তিতে
                      জানানো হয়, গত ২৪ ঘণ্টায় সারা দেশে নমুনা সংগ্রহ করা হয়েছে
                      ৪০ হাজার ১৩০টি। আর দেশের মোট ৭০৭টি ল্যাবে অ্যান্টিজেন
                      টেস্টসহ ২৪ ঘণ্টায় নমুনা পরীক্ষা করা হয়েছে ৪২ হাজার ৩টি। এর
                      মধ্যে ১০ হাজার ২৯৯ জনের দেহে করোনার উপস্থিতি পাওয়া গেছে
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-4/12">
                <ArticleRightList />
              </div>
            </div>
          </div>
          <div class="right-side mt-12 relative w-4/12">
            <div class="border-4 border-gray-700 rounded-xl p-4">
              <div class="flex justify-center">
                <div
                  class="absolute-part absolute -top-12 bg-gray-100 border m-4 p-4"
                >
                  <h4 class="text-4xl text-gray-700">
                    আন্তর্জাতিক
                  </h4>
                </div>
              </div>
              <div class=" mt-16">
                <div
                  class="border-b-2 flex justify-between items-center"
                  v-for="n in 4"
                  :key="n"
                >
                  <div class="detail">
                    <p class="text-base font-medium text-gray-500 my-2">
                      <span class="bg-red-600 w-4 h-1 inline-block"></span>
                      <span class="text-red-600">Covid</span>
                    </p>
                    <h4 class="text-base font-medium text-gray-700">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-base font-medium text-gray-500 my-2">
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
                  <div class="number">
                    <span class="text-6xl font-medium text-gray-500">{{
                      n
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ArticleLeftList from "@/components/sidebar/ArticleLeftList";
import ArticleRightList from "@/components/sidebar/ArticleRightList";
import AdvertiseItem from "@/components/Advertisement/AdvertiseItem";

export default {
  components: {
    ArticleLeftList,
    ArticleRightList,
    AdvertiseItem
  }
};
</script>
