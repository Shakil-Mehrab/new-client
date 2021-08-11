<template>
  <footer class="bg-gray-900">
    <section class="text-white">
      <div class="container mx-auto py-8">
        <div class="flex full">
          <div class="w-3/12 px-2 my-2" v-for="n in 4" :key="n">
            <div class="logo">
              <img src="@/assets/images/dbc/logo.PNG" alt="" class="w-48" />
            </div>
            <div class="my-4">
              <ul>
                <li class=" inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline-block text-red-600"
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
                    Chairman :
                  </span>
                </li>
                <li class="pl-6">Iqbal Sobhan Chowdhury</li>
                <li class="inline-block mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline-block text-red-600"
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
                    Managing Director :
                  </span>
                </li>
                <li class="pl-6">
                  Shahidul Ahsan Editor-in-Chief: M. Manjurul Islam
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-2">
        <div
          class="w-full  bg-red-600 flex justify-between items-center p-16 my-2"
        >
          <div>
            <span class="text-xl">Follow Us</span>
            <span class="bg-white rounded-full p-2 text-black ml-2"
              ><svg
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                /></svg
            ></span>
            <span class="bg-white rounded-full p-2 text-black ml-2"
              ><svg
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
      <div class="container mx-auto px-2">
        <div class="flex items-center justify-between w-full py-4">
          <div>
            &copy; 2021 All rights reserved Dhaka Bangla Media & Communication
            Ltd.
          </div>
          <div>
            <a href="" class="border-r border-white px-2">Privacy Policy</a>
            <a href="" class="px-2">Usage Terms</a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
