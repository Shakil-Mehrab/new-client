<template>
  <ul class="flex space-x-6">
    <carousel
      :perPageCustom="[[350, 3.5]]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="false"
      :paginationPadding="4"
      :paginationSize="4"
      :navigationClickTargetSize="20"
      class="relative product-slider"
    >
      <slide class="pr-1">
        <li class="flex flex-col items-center space-y-1">
          <div
            class="relative p-1 rounded-md  bg-gradient-to-tr from-yellow-400 to-purple-600"
          >
            <a
              href="#"
              class="block p-1 transition transform bg-white rounded-md  hover:-rotate-6"
            >
              <img
                class="w-24 h-24 rounded-md"
                src="https://placekitten.com/200/200"
                alt="cute kitty"
              />
            </a>
            <button
              class="absolute flex items-center justify-center w-8 h-8 font-mono text-2xl font-medium text-white bg-blue-500 border-4 border-white rounded-md  bottom-2 right-2 hover:bg-blue-700 focus:outline-none"
            >
              <div class="transform -translate-y-px">+</div>
            </button>
          </div>

          <a href="#">kitty_one</a>
        </li>
      </slide>
      <slide v-for="n in 4" :key="n" class="px-1">
        <li class="flex flex-col items-center space-y-1">
          <div
            class="p-1 rounded-md  bg-gradient-to-tr from-yellow-400 to-purple-600"
          >
            <a
              href="#"
              class="block p-1 transition transform bg-white rounded-md  hover:-rotate-6"
            >
              <img
                class="w-24 h-24 rounded-md"
                src="https://placekitten.com/201/200"
                alt="cute kitty"
              />
            </a>
          </div>

          <a href="#">kitty_two</a>
        </li>
      </slide>
    </carousel>
  </ul>
</template>
