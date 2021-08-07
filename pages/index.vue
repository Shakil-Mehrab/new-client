<template>
  <main>
    <!-- top section  -->
    <section class="top-news-section my-2">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <div class="left-side">
            <div class="my-2 flex" v-for="n in 5">
              <div class="figure ml-2  w-4/12">
                <img
                  src="~/assets/images/dbc/topsectionside.png"
                  alt=""
                  clall="w-full"
                />
              </div>
              <div class="detail mx-2  w-8/12">
                <h4 class="text-xl font-bold">
                  This is about world cricket
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus, magna sed aliquam erat,
                </p>
              </div>
            </div>
          </div>
          <div class="mid w-8/12">
            <div class="p-4 my-2 relative">
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
                <h4 class="text-xl font-bold">
                  This is about world cricket
                </h4>
                <p class="my-4">
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
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
                  ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
                  dolor sit amet, Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
          </div>
          <div class="right-side">
            <div class="my-2 flex">
              <div class="figure ml-2 w-4/12">
                <img
                  src="~/assets/images/dbc/topsectionside.png"
                  alt=""
                  clall="w-full"
                />
              </div>
              <div class="detail mx-2  w-8/12">
                <h4 class="text-xl font-bold">
                  This is about world cricket
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus, magna sed aliquam erat,
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
export default {};
</script>
