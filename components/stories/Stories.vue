<template>
  <ul class="">
    <carousel
      :perPageCustom="[
        [350, 4.5],
        [600, 6.5],
      ]"
      :loop="true"
      :autoplay="false"
      :paginationEnabled="false"
      :paginationPadding="4"
      :paginationSize="4"
      :navigationClickTargetSize="20"
      class="relative product-slider"
    >
      <slide v-for="n in 10" :key="n" class="pr-2">
        <li class="flex flex-col items-center space-y-1">
          <div
            class="p-1 rounded-md  bg-gradient-to-tr from-red-900 via-red-900 to-red-400"
          >
            <a
              href="#"
              class="block p-1 transition transform bg-white rounded-md  hover:-rotate-6"
            >
              <img
                class="rounded-md w-14 h-14"
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
