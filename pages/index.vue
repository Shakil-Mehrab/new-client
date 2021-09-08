<template>
  <main>
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-10/12">
            <div class="grid grid-cols-12 gap-1 sm:gap-6">
              <div
                class="order-2 col-span-12  sm:mt-12 2md:mt-0 2md:col-span-5 2md:order-1"
              >
                <ArticleLeftList :detail="true" />
              </div>
              <div
                class="order-1 col-span-12 rounded-md  2md:col-span-7 2md:order-1"
              >
                <ArticleTop />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="order-3 w-full xl:w-2/12">
            <ArticleHeadingList />
          </div>
        </div>
      </div>
    </div>

    <!-- covid section  -->
    <section class="mt-16 slide-section">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="p-4 bg-gray-100">
          <div class="w-10/12 mx-auto">
            <div
              class="relative grid grid-cols-1 border-b-2  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8"
            >
              <div class="fugure">
                <img
                  src="~/assets/images/dbc/covid.PNG"
                  alt=""
                  class="w-full"
                />
              </div>

              <div class="px-2 detail" v-for="n in 4" :key="n">
                <p class="text-base font-medium text-gray-500">
                  <span class="inline-block w-4 h-1 bg-red-600"></span>
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
                    class="inline-block w-6 h-6"
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
    <!-- banner  -->
    <AdvertiseItem />
    <!-- International responsive -->
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="px-4 py-2 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-8/12">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12 rounded-md 2md:col-span-6">
                <ArticleTopLeft />
              </div>
              <div class="col-span-12 sm:mt-12 2md:mt-0 2md:col-span-6">
                <ArticleLeftList :detail="true" />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="order-3 w-full xl:w-4/12">
            <ArticleHeadingList />
          </div>
        </div>
      </div>
    </div>
    <!-- International responsive -->
    <section class="my-8 international">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-wrap w-full">
          <div class="w-full lg:w-8/12">
            <div class="my-8">
              <Heading title="আন্তর্জাতিক" />
            </div>
            <div class="flex-wrap w-full md:flex">
              <div class="w-full mb-4 md:w-6/12">
                <ArticleTopLeft />
              </div>
              <div class="w-full md:w-6/12 md:pl-4">
                <ArticleRightList />
              </div>
            </div>
          </div>
          <div class="relative w-full my-16 lg:w-4/12 md:pl-4">
            <div class="p-4 border-4 border-gray-700 rounded-xl">
              <div class="flex justify-center">
                <div
                  class="absolute p-4 m-4 bg-gray-100 border  absolute-part -top-12"
                >
                  <h4 class="text-4xl text-gray-700">জেলার খবর</h4>
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
    <section class="my-8 subscribe">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-red-600 subscribe-bg-img rounded-xl">
          <div class="flex flex-wrap items-center w-full px-12 py-12">
            <div class="px-2 my-2 md:w-6/12">
              <h4 class="text-2xl font-medium text-white">
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
              </h4>
              <p class="my-2 text-base font-medium text-white">
                গত ২৪ ঘণ্টায় করোনায় শনাক্ত হয়েছেন ১০ হাজার ২৯৯ জন। এ নিয়ে দেশে
                করোনায় শনাক্তের সংখ্যা দাঁড়ালো ১৩ লাখ ৫৩ হাজার ৬৯৫ জন।
              </p>
            </div>
            <div class="w-full px-2 my-2 md:w-6/12">
              <div class="items-center w-full sm:flex">
                <input
                  type="text"
                  class="w-full h-12 px-4 my-2 text-white bg-red-500 rounded-md  sm:mx-2 focus:border-none focus:outline-none"
                  placeholder="Enter Your Email"
                />
                <button
                  class="h-12 px-4 text-base font-medium text-red-600 bg-white rounded-md "
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
    <section class="my-8 ceremony">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex-wrap w-full md:flex">
          <div class="my-2 md:w-8/12">
            <div class="my-8">
              <Heading title="অনুষ্ঠান সমারোহ" />
            </div>
            <div class="flex-wrap w-full md:flex">
              <div class="w-full xl:w-8/12 xl:pr-2">
                <ArticleTop />
              </div>
              <div class="w-full px-2 my-16 xl:w-4/12 xl:my-2">
                <ArticleHeadingList />
              </div>
            </div>
          </div>
          <div class="relative my-2 md:w-4/12 md:pl-2">
            <div class="">
              <ContactUs />
            </div>
            <div class="w-full my-2">
              <Heading title="Trending Poll" />
              <div class="w-full">
                <div class="p-2 bg-white border rounded-md shadow-md">
                  <div class="figure">
                    <img
                      src="@/assets/images/dbc/cow.png"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <div class="p-4 detail">
                    <p class="text-base font-medium text-gray-500">
                      <span class="">PLATFORM-TEST</span>
                    </p>
                    <h4 class="my-4 text-base font-medium text-gray-700">
                      নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                    </h4>
                    <p class="text-base font-medium text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block w-6 h-6"
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
                      <div class="w-full p-2 my-2 bg-gray-100 rounded-md">
                        <input type="radio" value="India" /> India
                      </div>
                      <div class="w-full p-2 my-2 bg-gray-100 rounded-md">
                        <input type="radio" value="Banglasesh" /> Banglasesh
                      </div>
                      <button
                        class="flex px-4 ml-auto text-base font-medium uppercase border-2 border-red-600 rounded-md "
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
    <section class="my-8 bg-gray-900 video">
      <div class="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div class="w-full">
          <div class="flex items-baseline w-full my-4 categroy-heading">
            <div class="text-4xl text-white heading">বিবিধ</div>
            <div
              class="w-full h-1 mx-4 bg-gray-800 rounded-md cat-side-border"
            ></div>
          </div>
        </div>
        <div class="flex flex-wrap items-center w-full">
          <div class="w-full my-2 md:w-4/12">
            <p class="text-base font-medium text-gray-500">
              <span class="inline-block w-4 h-1 bg-red-600"></span>
              <span class="text-red-600">PLATFORM-TEST</span>
            </p>
            <h4 class="my-4 text-2xl font-medium text-white">
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </h4>
            <p class="text-base font-medium text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-6 h-6"
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
          <div class="w-full my-2 md:w-8/12">
            <div class="overflow-hidden rounded-md vidow-section">
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
        <div
          class="relative grid grid-cols-1 border-b-2  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div class="w-full my-2" v-for="n in 4" :key="n">
            <div class="overflow-hidden rounded-md vidow-section">
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
    <section class="my-8 spcial-news">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="w-full">
          <Heading title="স্পেশ্যাল রিপোর্ট" />
        </div>
        <div class="flex flex-wrap w-full news-section">
          <div class="w-full my-2 bg-gray-100 md:w-6/12">
            <div class="p-2 md:p-16">
              <button
                class="flex px-4 text-base font-medium text-white uppercase bg-red-600 border-2 rounded-md "
              >
                Covid
              </button>
              <div class="my-4">
                <h4 class="text-2xl font-medium text-gray-700">
                  নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                </h4>
                <p class="my-4 text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-6 h-6"
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
                  জানানো হয়, গত ২৪ ঘণ্টায় সারা দেশে
                </p>
              </div>
            </div>
          </div>
          <div class="w-full my-2 md:w-6/12">
            <ul
              role="list"
              class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8"
            >
              <li class="relative">
                <div
                  class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt=""
                    class="object-cover pointer-events-none  group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    class="absolute inset-0 focus:outline-none"
                  >
                    <span class="sr-only">View details for IMG_4985.HEIC</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- four div  -->

    <section class="my-8 four-div">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <ul
          role="list"
          class="grid grid-cols-2  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li class="relative" v-for="n in 4" :key="n">
            <div
              class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
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
            <div class="flex">
              <p
                class="absolute top-0 flex px-4 py-1 text-sm text-white uppercase bg-red-600 rounded-sm  left-4"
              >
                Covid
              </p>
            </div>
            <p
              class="block mt-2 text-base font-medium text-gray-600 truncate pointer-events-none "
            >
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </p>
            <p
              class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-6 h-6"
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
            <p
              class="block mt-2 text-sm font-medium text-gray-500 pointer-events-none "
            >
              শুক্রবার রাতে উপজেলার রাজাপালং ইউনিয়নের সীমান্তের গোলডেবা এলাকায় এ
              ঘটনা ঘটে। বিজিবি জানায়,
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- photo gallery  respnsive-->
    <section class="my-8 photo-gallery">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div
          class="relative w-full px-2 py-16 mx-auto text-center border-t-2 border-l-2 border-r-2 border-red-600  top-pary sm:w-8/12 rounded-t-md"
        >
          <div class="flex justify-center">
            <p
              class="absolute top-0 flex justify-center px-4 text-sm text-white uppercase bg-red-600 rounded-sm "
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

        <ul
          role="list"
          class="grid grid-cols-2  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li class="relative border-r" v-for="n in 8" :key="n">
            <div
              class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
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
            <div class="flex">
              <p
                class="absolute top-0 flex px-2 py-1 text-sm text-white uppercase bg-gray-900 rounded-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
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
            <p
              class="block pb-4 mt-2 text-base font-medium text-gray-700 truncate border-b pointer-events-none "
            >
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- Plotics  responsive-->
    <section class="my-8 politics">
      <div class="container px-4 mx-auto lg:px-8">
        <div class="flex flex-wrap w-full">
          <div class="w-full my-2 md:w-8/12 md:pr-4">
            <div class="my-8">
              <Heading title="রাজনীতিক" />
            </div>
            <ul
              role="list"
              class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8"
            >
              <li
                class="relative grid grid-cols-1 border-b-2  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
                v-for="n in 4"
                :key="n"
              >
                <div
                  class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt=""
                    class="object-cover pointer-events-none  group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    class="absolute inset-0 focus:outline-none"
                  >
                    <span class="sr-only">View details for IMG_4985.HEIC</span>
                  </button>
                </div>
                <div>
                  <div class="flex w-full my-4 sm:my-0">
                    <p class="text-sm font-medium text-gray-500 uppercase">
                      Covid
                    </p>
                  </div>
                  <p
                    class="block mt-2 text-base font-medium text-gray-700 truncate pointer-events-none "
                  >
                    নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                  </p>
                  <p
                    class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-block w-6 h-6"
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
                  <p
                    class="block mt-2 text-sm font-medium text-gray-500 pointer-events-none "
                  >
                    শুক্রবার রাতে উপজেলার রাজাপালং ইউনিয়নের সীমান্তের গোলডেবা
                    এলাকায় এ ঘটনা ঘটে। বিজিবি জানায়,শুক্রবার রাতে উপজেলার
                    রাজাপালং ইউনিয়নের সীমান্তের গোলডেবা
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full my-2 md:w-4/12">
            <div class="my-8">
              <Heading title="ট্রেন্ডিং নিউজ" />
            </div>
            <div class="w-full rounded-md shadow-md">
              <div class="flex">
                <div
                  class="w-full p-4 text-2xl text-center text-white bg-red-600 rounded-md "
                >
                  Trending
                </div>
                <div
                  class="w-full p-4 text-2xl text-center bg-gray-100 rounded-md"
                >
                  Most Recent
                </div>
              </div>
              <div class="p-2">
                <ul
                  role="list"
                  class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8"
                >
                  <li
                    class="relative grid grid-cols-1 border-b-2  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
                    v-for="n in 4"
                    :key="n"
                  >
                    <div
                      class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        class="object-cover pointer-events-none  group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        class="absolute inset-0 focus:outline-none"
                      >
                        <span class="sr-only"
                          >View details for IMG_4985.HEIC</span
                        >
                      </button>
                    </div>
                    <div>
                      <p
                        class="block mt-2 text-base font-medium text-gray-700 truncate pointer-events-none  md:mt-0"
                      >
                        নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="my-4 text-right">
              <ul
                role="list"
                class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8"
              >
                <li class="relative">
                  <div
                    class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                      alt=""
                      class="object-cover pointer-events-none  group-hover:opacity-75"
                    />
                    <button
                      type="button"
                      class="absolute inset-0 focus:outline-none"
                    >
                      <span class="sr-only"
                        >View details for IMG_4985.HEIC</span
                      >
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Dbc special  responsive-->
    <section class="my-8 special">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="my-8">
          <Heading title="Special News" />
        </div>
        <ul
          role="list"
          class="grid grid-cols-2  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li class="relative" v-for="n in 4" :key="n">
            <div
              class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
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
            <div class="flex w-full my-4">
              <p class="text-sm font-medium text-gray-500 uppercase">Covid</p>
            </div>
            <p
              class="block mt-2 text-base font-medium text-gray-600 truncate pointer-events-none "
            >
              নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
            </p>
            <p
              class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-6 h-6"
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
          </li>
        </ul>
      </div>
    </section>
    <!--Life style -->
    <section class="my-8 International">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-wrap w-full">
          <div class="w-full md:w-4/12" v-for="n in 2" :key="n">
            <div class="my-8 md:pr-4">
              <Heading title="Lifestyle" />
            </div>
            <div class="md:pr-4">
              <ArticleTopLeft />
            </div>
          </div>
          <div class="relative w-full md:w-4/12">
            <div class="my-8">
              <Heading title="Entertainment" />
            </div>
            <ul
              role="list"
              class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:gap-x-8"
            >
              <li class="relative">
                <div
                  class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                    alt=""
                    class="object-cover pointer-events-none  group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    class="absolute inset-0 focus:outline-none"
                  >
                    <span class="sr-only">View details for IMG_4985.HEIC</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Opinion  responsive-->
    <section class="my-8 opinion">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-center w-full">
          <div class="w-full my-2 md:w-8/12">
            <div class="my-8">
              <Heading title="অভিমতি" />
            </div>
            <div class="flex flex-wrap w-full">
              <div class="w-full my-2 md:w-6/12 md:pr-2">
                <div class="relative flex items-end h-full border rounded-md">
                  <div class="px-4 my-4 detail">
                    <h4
                      class="absolute w-10/12 p-4 text-xl text-white bg-red-600  -left-16 top-4"
                    >
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন। তিনি পাবনা
                      মেডিক্যাল কলেজ কেন্দ্র থেকে পরীক্ষায় অংশ নিয়েছিলেন।
                    </h4>
                    <div class="text-sm text-gray-500">
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন।
                    </div>
                    <div class="my-4 text-sm text-gray-500">
                      এমবিবিএস ২০২০-২১ শিক্ষাবর্ষের ভর্তি পরীক্ষায় প্রথম স্থান
                      অর্জন করেছেন পাবনার মেয়ে মিশরী মুনমুন। তিনি পাবনা
                      মেডিক্যাল কলেজ কেন্দ্র থেকে পরীক্ষায় অংশ নিয়েছিলেন।
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full my-2 md:w-6/12">
                <ul
                  role="list"
                  class="grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-1 lg:grid-cols-1 xl:gap-x-8"
                >
                  <li
                    class="relative grid grid-cols-1 border-b-2  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
                    v-for="n in 4"
                    :key="n"
                  >
                    <div
                      class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                        alt=""
                        class="object-cover pointer-events-none  group-hover:opacity-75"
                      />
                      <button
                        type="button"
                        class="absolute inset-0 focus:outline-none"
                      >
                        <span class="sr-only"
                          >View details for IMG_4985.HEIC</span
                        >
                      </button>
                    </div>
                    <div>
                      <div class="flex w-full my-4 sm:my-0">
                        <p class="text-sm font-medium text-gray-500 uppercase">
                          Covid
                        </p>
                      </div>
                      <p
                        class="block mt-2 text-base font-medium text-gray-600 truncate pointer-events-none "
                      >
                        নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
                      </p>
                      <p
                        class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="inline-block w-6 h-6"
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
                  </li>

                  <!-- More files... -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- last section responsive  -->
    <section class="my-8 slide-section">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <ul
          role="list"
          class="grid grid-cols-2  gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li
            class="relative grid grid-cols-1  gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
            v-for="n in 4"
            :key="n"
          >
            <div
              class="block w-full overflow-hidden bg-gray-100 rounded-lg  group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"
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
            <div>
              <p
                class="block mt-2 text-base font-medium text-gray-700 truncate pointer-events-none  sm:my-0"
              >
                নারীর শরীরে পেট্রোল ঢেলে আগুন দেয়ার অভিযোগ
              </p>
              <p
                class="block my-4 text-sm font-medium text-gray-500 pointer-events-none "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6"
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
          </li>
        </ul>
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
    ContactUs,
  },
};
</script>
