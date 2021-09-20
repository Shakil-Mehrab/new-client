<template>
  <main>
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-10/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <div
                class="order-2 col-span-12  sm:mt-12 2md:mt-0 2md:col-span-5 2md:order-1"
              >
                <ArticleListWithImage :news="4" :detail="true" />
              </div>
              <div
                class="order-1 col-span-12 rounded-md  2md:col-span-7 2md:order-1"
              >
                <ArticleTop />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <!-- <div class="order-3 w-full xl:w-2/12">
            <HeadingList :news="5" />
          </div> -->
        </div>
      </div>
    </div>
    <!-- banner  -->
    <!-- covid section  -->
    <!-- <section class="mt-16 slide-section">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="p-4 bg-gray-100">
          <div class="w-10/12 mx-auto">
            <div
              class="relative grid grid-cols-1 border-b-2 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8"
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
    </section> -->
    <!-- <AdvertiseItem /> -->
    <!-- English -->
    <!-- <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="w-full">
          <div class="sm:my-6">
            <Devider title="English" />
          </div>
          <div class="w-full">
            <div class="">
              <EnglishArtilce :news="5" />
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Banglasesh -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="Banglasesh" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- International -->
    <div class="container hidden mx-auto sm:px-6 lg:px-8 md:block">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-8/12">
            <div class="sm:my-6">
              <Devider title="আন্তর্জাতিক" />
            </div>
            <div class="grid grid-cols-12 gap-1 md:gap-6">
              <div class="col-span-12 rounded-md 2md:col-span-6">
                <ArticleTopLeft />
              </div>
              <div class="col-span-12 sm:mt-3 2md:mt-0 2md:col-span-6">
                <ArticleListWithImage :detail="true" />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="relative w-full mt-16 xl:w-4/12">
            <div class="p-4 border-4 border-gray-700 rounded-xl">
              <div class="flex justify-center">
                <div
                  class="absolute p-4 m-4 bg-gray-100 border  absolute-part -top-12"
                >
                  <h4 class="text-4xl text-gray-700">জেলার খবর</h4>
                </div>
              </div>
              <div class="my-8">
                <HeadingList :date="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- International -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="International" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sports -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="Sports" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- banner  -->
    <AdvertiseItem class="md:hidden" />
    <!-- Special News Event  -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="sm:my-6">
          <Devider title="Special News Event" />
        </div>
        <div class="xl:space-x-6 xl:flex">
          <div class="w-full xl:w-10/12">
            <div class="grid grid-cols-12 gap-2 md:gap-6">
              <div
                class="order-1 col-span-12 rounded-md  2md:col-span-7 2md:order-1"
              >
                <ArticleTop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Opinion -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="Opinion" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ceremony -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="Ceremony" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Job -->
    <div class="container mx-auto sm:px-6 lg:px-8 md:hidden">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full">
            <div class="sm:my-6">
              <Devider title="Job" />
            </div>
            <div class="w-full">
              <div class="">
                <ArtilceSection :news="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- subscribe  -->
    <section class="my-6 subscribe">
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
    <!-- Occation -->
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <div class="xl:space-x-6 xl:flex">
          <!-- col 8 -->
          <div class="w-full xl:w-8/12">
            <div class="sm:my-6">
              <Devider title="অনুষ্ঠান সমারোহ" />
            </div>
            <div class="grid grid-cols-12 gap-1 md:gap-6">
              <div class="col-span-12 rounded-md 2md:col-span-8">
                <ArticleTop />
              </div>
              <div class="col-span-12 sm:mt-3 2md:mt-0 2md:col-span-4">
                <HeadingList :date="true" />
              </div>
            </div>
          </div>
          <!-- col 4  -->
          <div class="relative w-full xl:w-4/12">
            <div class="sm:my-6">
              <Devider title="International" />
            </div>
            <div class="my-6">
              <ContactUs />
            </div>
            <div class="w-full my-2">
              <div class="sm:my-6">
                <Devider title="Trending Poll" />
              </div>
              <div class="w-full">
                <TrendingPoll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video  -->
    <section class="my-6 bg-gray-900 video">
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
        <div class="sm:my-6">
          <Devider title="স্পেশ্যাল রিপোর্ট" />
        </div>
        <SpecialReport />
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
            <div class="sm:my-6">
              <Devider title="রাজনীতিক" />
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
            <div class="sm:my-6">
              <Devider title="ট্রেন্ডিং নিউজ" />
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
        <div class="sm:my-6">
          <Devider title="Special News" />
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
            <div class="sm:my-6">
              <Devider title="Lifestyle" />
            </div>
            <div class="md:pr-4">
              <ArticleTopLeft />
            </div>
          </div>
          <div class="relative w-full md:w-4/12">
            <div class="sm:my-6">
              <Devider title="Entertainment" />
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
            <div class="sm:my-6">
              <Devider title="অভিমতি" />
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
import ArticleListWithImage from "@/components/sidebar/ArticleListWithImage";
import ArticleRightList from "@/components/sidebar/ArticleRightList";
import TrendingPoll from "@/components/sidebar/TrendingPoll";
import MostPopular from "@/components/sidebar/MostPopular";
import ContactUs from "@/components/sidebar/ContactUs";
import AdvertiseItem from "@/components/Advertisement/AdvertiseItem";
import HeadingList from "@/components/sidebar/HeadingList";
import Devider from "@/components/devider/Devider";
import EnglishArtilce from "@/components/english/EnglishArtilce";
import SpecialReport from "@/components/specialReport/SpecialReport";
import ArtilceSection from "@/components/section/ArtilceSection";

export default {
  components: {
    ArticleTop,
    ArticleTopLeft,
    ArticleListWithImage,
    ArticleRightList,
    AdvertiseItem,
    HeadingList,
    MostPopular,
    ContactUs,
    TrendingPoll,
    Devider,
    EnglishArtilce,
    SpecialReport,
    ArtilceSection,
  },
};
</script>
