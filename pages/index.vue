<template>
  <main>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li class="relative" v-for="n in 4" :key="n">
          <div
            class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
              alt=""
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details for IMG_4985.HEIC</span>
            </button>
          </div>
          <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            IMG_4985.HEIC
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            3.9 MB
          </p>
        </li>

        <!-- More files... -->
      </ul>
    </div>
    <!-- top section  -->
    <section class="top-news-section my-4">
      <div class="container mx-auto">
        <div class="md:flex flex-wrap w-full">
          <div class="md:w-4/12 px-2 my-2">
            <ArticleLeftList />
          </div>
          <div class="md:w-6/12 px-2 my-16 md:my-2">
            <ArticleTop />
          </div>
          <div class="w-2/12 px-2 my-2">
            <ArticleHeadingList />
          </div>
        </div>
      </div>
    </section>
    <!-- covid section  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="bg-gray-100 p-4">
          <div class="w-10/12 mx-auto">
            <div class="flex w-full justify-center items-center">
              <div class="left-side w-3/12 px-2 my-2">
                <div class="fugure">
                  <img
                    src="~/assets/images/dbc/covid.PNG"
                    alt=""
                    class="w-full"
                  />
                </div>
              </div>
              <div class="right-side w-9/12 px-2 my-2">
                <div class="flex w-full">
                  <div class="detail px-2" v-for="n in 4" :key="n">
                    <p class="text-base font-medium text-gray-500">
                      <span class="bg-red-600 w-4 h-1 inline-block"></span>
                      <span class="text-red-600 uppercase">Covid</span>
                    </p>
                    <h4 class="text-base font-medium text-gray-700">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-sm text-gray-500">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে
                      পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </p>
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
    <!-- International  -->
    <section class="International my-4">
      <div class="container mx-auto">
        <div class="flex flex-wrap w-full">
          <div class="left-side md:w-8/12 px-2 my-2">
            <div>
              <Heading title="আন্তর্জাতিক" />
            </div>
            <div class="md:flex w-full flex-wrap">
              <div class="md:w-6/12 my-2 pr-2">
                <ArticleTopLeft />
              </div>
              <div class="md:w-6/12 px-2">
                <ArticleRightList />
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-2 my-12 relative">
            <div class="border-4 border-gray-700 rounded-xl p-4">
              <div class="flex justify-center">
                <div
                  class="absolute-part absolute -top-12 bg-gray-100 border m-4 p-4"
                >
                  <h4 class="text-4xl text-gray-700">
                    জেলার খবর
                  </h4>
                </div>
              </div>
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
          <div class=" flex flex-wrap items-center px-12 py-12 w-full">
            <div class="md:w-6/12 my-2 px-2">
              <h4 class="text-2xl font-medium text-white">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
              </h4>
              <p class="text-base font-medium text-white my-2">
                গত ২৪ ঘণ্টায় করোনায় শনাক্ত হয়েছেন ১০ হাজার ২৯৯ জন। এ নিয়ে দেশে
                করোনায় শনাক্তের সংখ্যা দাঁড়ালো ১৩ লাখ ৫৩ হাজার ৬৯৫ জন।
              </p>
            </div>
            <div class="w-full md:w-6/12 my-2 px-2">
              <div class="flex items-center w-full">
                <input
                  type="text"
                  class="w-full h-12 mx-2 rounded-md bg-red-500 text-white px-4 focus:border-none focus:outline-none"
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
    <section class="ceremony my-4">
      <div class="container mx-auto">
        <div class="md:flex flex-wrap w-full">
          <div class="md:w-8/12 px-2 my-2">
            <div>
              <Heading title="অনুষ্ঠান সমারোহ" />
            </div>
            <div class="md:flex flex-wrap w-full">
              <div class="left-most md:w-8/12 my-2 pr-2">
                <ArticleTop />
              </div>
              <div class="md:w-4/12 px-2 my-16 md:my-2">
                <ArticleHeadingList />
              </div>
            </div>
          </div>
          <div class="md:w-4/12 px-2 my-2 relative">
            <div>
              <ContactUs />
            </div>
            <div class="w-full my-2">
              <Heading title="Trending Poll" />
              <div class="w-full">
                <div class="bg-white p-2 rounded-md shadow-md border">
                  <div class="figure">
                    <img
                      src="@/assets/images/dbc/cow.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="detail p-4">
                    <p class="text-base font-medium text-gray-500">
                      <span class="">PLATFORM-TEST</span>
                    </p>
                    <h4 class="text-base font-medium text-gray-700 my-4">
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
                    <div class="my-2">
                      <div class="bg-gray-100 w-full p-2 my-2 rounded-md">
                        <input type="radio" value="India" /> India
                      </div>
                      <div class="bg-gray-100 w-full p-2 my-2 rounded-md">
                        <input type="radio" value="Banglasesh" /> Banglasesh
                      </div>
                      <button
                        class="uppercase flex ml-auto border-2 border-red-600 rounded-md px-4 text-base font-medium"
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- video  -->
    <section class="video my-4 bg-gray-900">
      <div class="container mx-auto py-8 ">
        <div class="w-full px-2">
          <div class="categroy-heading flex w-full my-4  items-baseline">
            <div class="heading text-4xl text-white">বিবিধ</div>
            <div
              class="cat-side-border bg-gray-800 w-full h-1 rounded-md mx-4"
            ></div>
          </div>
        </div>
        <div class="flex w-full items-center">
          <div class="left-side md:w-4/12 px-2 my-2">
            <p class="text-base font-medium text-gray-500">
              <span class="bg-red-600 w-4 h-1 inline-block"></span>
              <span class="text-red-600">PLATFORM-TEST</span>
            </p>
            <h4 class="text-2xl font-medium text-white my-4">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </h4>
            <p class="text-base font-medium text-white">
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
            <p class="my-4 text-gray-400">
              উদ্বোধনের একদিন পরও চালু হয়নি করোনার ফিল্ড হাসপাতাল
            </p>
          </div>
          <div class="right-side md:w-8/12 px-2 my-2">
            <div class="vidow-section rounded-md overflow-hidden">
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/jwNNiwpgcVQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full px-2 my-2" v-for="n in 4" :key="n">
            <div class="vidow-section rounded-md overflow-hidden">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/jwNNiwpgcVQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- advertisement  -->
    <AdvertiseItem />
    <!-- Special news  -->
    <section class="spcial-news my-4">
      <div class="container mx-auto">
        <div class="w-full px-2">
          <Heading title="স্পেশ্যাল রিপোর্ট" />
        </div>
        <div class="news-section flex w-full px-2">
          <div class="left-most w-6/12 my-2 p-16 bg-gray-100">
            <button
              class="uppercase flex bg-red-600 border-2 text-white rounded-md px-4 text-base font-medium"
            >
              Covid
            </button>
            <div class="my-8">
              <h4 class="text-2xl font-medium text-gray-700">
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
                পরিস্থিতি নিয়ে স্বাস্থ্য অধিদপ্তর থেকে পাঠানো বিজ্ঞপ্তিতে জানানো
                হয়, গত ২৪ ঘণ্টায় সারা দেশে নমুনা সংগ্রহ করা হয়েছে ৪০ হাজার
                ১৩০টি।
              </p>
            </div>
          </div>
          <div class="left-most w-6/12 my-2">
            <div class="figure">
              <img
                src="~/assets/images/dbc/topsectionmid.png"
                alt=""
                clall="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- four div  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="flex w-full justify-center items-center">
          <div
            class="w-full px-4 my-2 first:pl-2 last:pr-2"
            v-for="n in 4"
            :key="n"
          >
            <div class="figure relative">
              <img src="~/assets/images/dbc/play.png" alt="" class="w-full" />
              <div class="flex">
                <p
                  class="bg-red-600 text-white text-sm px-4 py-2 absolute top-0 flex left-4 uppercase"
                >
                  Covid
                </p>
              </div>
            </div>
            <div class="detail my-2">
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
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে পেট্রোল
                ঢেলে আগুন দেয়ার অভিযোগ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- photo gallery  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div
          class="detail w-8/12 mx-auto text-center border-t-2 border-l-2 border-r-2 border-red-600 rounded-t-md py-8 relative"
        >
          <div class="flex justify-center ">
            <p
              class="bg-red-600 text-white text-sm px-4 rounded-sm absolute top-0 flex justify-center uppercase"
            >
              Photo Album
            </p>
          </div>
          <h4 class="text-xl font-medium text-gray-700">
            নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
          </h4>
          <p class="text-sm text-gray-500">
            নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে পেট্রোল ঢেলে
            আগুন দেয়ার অভিযোগ
          </p>
        </div>
        <div class="flex flex-wrap w-full justify-center items-center -mt-4">
          <div
            class="px-2 my-4 w-3/12  border-r-2 first:pl-2"
            v-for="n in 8"
            :key="n"
          >
            <div class="w-full -mb-4 border-b-2">
              <div class="figure relative">
                <img src="~/assets/images/dbc/play.png" alt="" class="w-full" />
                <div class="flex">
                  <p
                    class="bg-gray-900 text-white text-sm px-4 py-2 absolute top-0 flex uppercase rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
              <div class="detail my-2">
                <h4 class="text-base font-medium text-gray-700">
                  নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Plotics  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="flex w-full">
          <div class="w-8/12 px-2 my-2 ">
            <div>
              <Heading title="রাজনীতিক" />
            </div>
            <div class="flex w-full border-b-2 py-2" v-for="n in 6" :key="n">
              <div class="figure relative">
                <img src="~/assets/images/dbc/play.png" alt="" class="w-full" />
              </div>
              <div class="detail px-2">
                <div class="flex">
                  <p
                    class=" text-gray-500 font-medium text-base  flex uppercase"
                  >
                    Covid
                  </p>
                </div>
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
                  নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে
                  পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                </p>
              </div>
            </div>
          </div>
          <div class="w-4/12 px-2 my-2 ">
            <div>
              <Heading title="ট্রেন্ডিং নিউজ" />
            </div>
            <MostPopular />

            <div class="figure my-4 text-right">
              <img
                src="@/assets/images/dbc/addlong.png"
                alt=""
                class="w-full ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Dbc special  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div>
          <Heading title="Special News" />
        </div>
        <div class="flex w-full justify-center items-center">
          <div
            class="w-full px-4 my-2 first:pl-2 last:pr-2"
            v-for="n in 4"
            :key="n"
          >
            <div class="figure relative">
              <img src="~/assets/images/dbc/play.png" alt="" class="w-full" />
            </div>
            <div class="detail my-2">
              <div class="flex">
                <p class="text-gray-500 text-sm uppercase">
                  Covid
                </p>
              </div>
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
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ. নারীর শরীরে পেট্রোল
                ঢেলে আগুন দেয়ার অভিযোগ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- DBC News Special  -->
    <section class="International my-4">
      <div class="container mx-auto">
        <div class="flex w-full">
          <div class="left-side w-4/12 px-2 my-2" v-for="n in 2" :key="n">
            <div>
              <Heading title="Lifestyle" />
            </div>
            <ArticleTopLeft />
          </div>
          <div class="right-side w-4/12 px-2 my-2 relative">
            <div>
              <Heading title="Entertainment" />
            </div>
            <div class="figure my-4 text-right relative">
              <img
                src="@/assets/images/dbc/addlong.png"
                alt=""
                class="w-full ml-auto"
              />
              <div
                class="absolute bottom-4 p-4 text-white text-base font-medium"
              >
                এবার শিল্পী সমিতির সদস্যপদ হারালেন পরীমনি
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Opinion  -->
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="flex w-full justify-center">
          <div class="w-8/12 px-2 my-2 ">
            <div>
              <Heading title="অভিমতি" />
            </div>
            <div class="flex w-full">
              <div class="w-6/12 px-2 my-2 ">
                <div class="border rounded-md h-full relative flex items-end">
                  <div class="detail px-4 my-4 ">
                    <h4
                      class="text-xl absolute -left-16 top-4 bg-red-600 p-4 text-white w-10/12"
                    >
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন। তিনি পাবনা
                      মেডিক্যাল কলেজ কেন্দ্র থেকে পরীক্ষায় অংশ নিয়েছিলেন।
                    </h4>
                    <div class="text-sm text-gray-500">
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন।
                    </div>
                    <div class="text-sm text-gray-500 my-4">
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন। তিনি পাবনা
                      মেডিক্যাল কলেজ কেন্দ্র থেকে পরীক্ষায় অংশ নিয়েছিলেন।
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-6/12 px-2 my-2">
                <div
                  class="flex w-full border-b-2 py-2"
                  v-for="n in 3"
                  :key="n"
                >
                  <div class="figure relative">
                    <img
                      src="~/assets/images/dbc/play.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="detail px-2">
                    <div class="flex">
                      <p
                        class=" text-gray-500 font-medium text-base  flex uppercase"
                      >
                        Covid
                      </p>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="slide-section my-4">
      <div class="container mx-auto ">
        <div class="w-12/12 px-2 my-2 ">
          <div class="flex w-full">
            <div class="flex w-full border-b-2 py-2" v-for="n in 4" :key="n">
              <div class="figure relative">
                <img
                  src="~/assets/images/dbc/play.png"
                  alt=""
                  class="w-full h-full"
                />
              </div>
              <div class="detail px-2">
                <div class="flex">
                  <p
                    class=" text-gray-500 font-medium text-base  flex uppercase"
                  >
                    Covid
                  </p>
                </div>
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
import ArticleTopLeft from "@/components/article/ArticleTopLeft";
import ArticleLeftList from "@/components/sidebar/ArticleLeftList";
import ArticleRightList from "@/components/sidebar/ArticleRightList";
import MostPopular from "@/components/sidebar/MostPopular";
import ContactUs from "@/components/sidebar/ContactUs";

import AdvertiseItem from "@/components/Advertisement/AdvertiseItem";
import ArticleHeadingList from "@/components/sidebar/ArticleHeadingList";
import Heading from "@/components/heading/Heading";

export default {
  components: {
    ArticleTop,
    ArticleTopLeft,
    ArticleLeftList,
    ArticleRightList,
    AdvertiseItem,
    ArticleHeadingList,
    Heading,
    MostPopular,
    ContactUs
  }
};
</script>
