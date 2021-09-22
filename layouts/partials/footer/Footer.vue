<template>
  <footer class="bg-gray-700">
    <section class="text-white">
      <div class="container py-8 mx-auto">
        <div class="flex full">
          <div class="w-3/12 px-2 my-2">
            <div class="logo">
              <img src="@/assets/images/dbc/logo.PNG" alt="" class="w-48" />
            </div>
            <div class="my-4">
              <ul>
                <li class="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    /></svg
                  ><span class="border-b border-white"> Chairman : </span><br />
                  <span class="pl-4">Iqbal Sobhan Chowdhury</span>
                </li>

                <li class="inline-block mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    /></svg
                  ><span class="border-b border-white">
                    Managing Director : </span
                  ><br /><span class="pl-4"
                    >Shahidul Ahsan Editor-in-Chief: M. Manjurul Islam</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="w-3/12 px-2 my-2">
            <div class="my-4">
              <ul>
                <li class="flex items-start mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block w-6 text-red-600"
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
                  <div class="px-2 border-white">
                    Ahsan Tower,<br />
                    6 Bir Uttam AK Khandaker Road, <br />
                    Mohakhali Commercial Area,<br />
                    Dhaka - 1213, Bangladesh
                  </div>
                </li>
                <li class="flex items-start my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div class="px-2 border-white">
                    Phone: +8 096 ৭৭৭ 322 or +8 02 9852431-5
                  </div>
                </li>
                <li class="flex items-start mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div class="px-2 border-white">Fax: +8 02 9852360</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-3/12 px-2 my-2">
            <div class="my-4">
              <ul>
                <li class="text-xl font-medium text-red-600">Link</li>

                <li class="flex justify-between my-4" v-for="n in 4" :key="n">
                  <a href="">Bangladesh</a>
                  <a href="">International</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-3/12 px-2 my-2">
            <div class="my-4">
              <ul>
                <li class="text-xl font-medium text-red-600">Latest News</li>

                <li class="flex items-center my-4" v-for="n in 4" :key="n">
                  <div class="logo">
                    <img
                      src="@/assets/images/dbc/user.png"
                      alt=""
                      class="w-12"
                    />
                  </div>
                  <a href="" class="mx-2">International</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-2 mx-auto">
        <div
          class="flex items-center justify-between w-full p-16 my-2 bg-red-600"
        >
          <div>
            <span class="text-xl">Follow Us</span>
            <span class="p-2 ml-2 text-black bg-white rounded-full"
              ><svg
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                /></svg
            ></span>
            <span class="p-2 ml-2 text-black bg-white rounded-full"
              ><svg
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                /></svg
            ></span>
          </div>
          <div>
            <span class="text-xl">Download App</span>
            <img
              src="@/assets/images/dbc/app.png"
              alt=""
              class="inline-block"
            />
          </div>
        </div>
      </div>
      <div class="container px-2 mx-auto">
        <div class="flex items-center justify-between w-full py-4">
          <div>
            &copy; 2021 All rights reserved Dhaka Bangla Media & Communication
            Ltd.
          </div>
          <div>
            <a href="" class="px-2 border-r border-white">Privacy Policy</a>
            <a href="" class="px-2">Usage Terms</a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
