<template>
  <footer class="bg-gray-800">
    <section class="pb-16 text-gray-300">
      <div class="container py-6 mx-auto">
        <div class="px-2 tracking-wide">
          <div class="flex justify-center">
            <RedLogo class="w-auto h-16" />
          </div>
          <div class="grid grid-cols-12 mt-6 text-sm">
            <div class="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block w-5 h-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div class="col-span-11">
              <p class="inline-block">
                <span class=""> Chairman :</span>
                <span class="">Iqbal Sobhan Chowdhury</span>
              </p>
              <p class="inline-block">
                <span class=""> Managing Director :</span>
                <span class="">Shahidul Ahsan</span>
              </p>
              <p class="inline-block">
                <span class=""> Editor-in-Chief :</span>
                <span class="">M. Manjurul Islam</span>
              </p>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-3 text-sm">
            <div class="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="col-span-11">
              <p class="inline-block text-gray-300">
                Ahsan Tower,<br />
                76 Bir Uttam AK Khandaker Road, <br />
                Mohakhali Commercial Area, Dhaka - 1213, Bangladesh
              </p>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-3 text-sm">
            <div class="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-red-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <div class="col-span-11">
              <p class="inline-block text-gray-300">
                Phone: +8096 777322 or +802 9852431-5
              </p>
              <p class="inline-block text-gray-300">Fax: +802 9852360</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div class="px-2">
          <div class="flex items-center justify-center w-full my-2">
            <div>
              <div class="mb-2 text-lg text-center">Download Mobile App</div>
              <a href="" target="_blank">
                <img
                  src="@/assets/images/dbc/app.png"
                  alt=""
                  class="inline-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-3">
        <div class="px-4">
          <div class="border-t border-gray-400"></div>
        </div>
      </div>
      <div class="container mx-auto mt-3 text-sm tracking-tight">
        <div class="px-2">
          <div class="text-center">
            &copy; 2021 All rights reserved Dhaka Bangla Media
          </div>
          <div class="flex items-center justify-between w-full py-3">
            <div class="overflow-hidden leading-tight">
              <a href="" class="px-1 border-r border-white">Privacy Policy</a>
              <a href="" class="px-1">Usage Terms</a>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
    <div>
      <FooterPinnedAdd />
    </div>
  </footer>
</template>
<script>
import RedLogo from "@/layouts/logo/RedLogo";
import SocialMedia from "@/components/social/SocialMedia";
import FooterPinnedAdd from "@/components/partials/footer/FooterPinnedAdd";

export default {
  components: {
    RedLogo,
    SocialMedia,
    FooterPinnedAdd,
  },
};
</script>

