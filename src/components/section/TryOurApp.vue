<template>
  <div
    class="bg-big_color dark:bg-bg_color self-center flex w-full container mx-auto pt-0 pb-0 flex-col justify-center mt-44 px-20 rounded-[32px] max-md:mt-10 max-md:px-5 overflow-visible h-[350px]"
  >
    <div class="self-center z-[1] w-full">
      <div class="gap-5 flex w-full">
        <div class="flex flex-col items-stretch w-9/12">
          <div class="flex flex-col my-auto max-md:mt-10">
            <div
              class="items-start flex w-[630px] max-w-full flex-col self-start"
            >
              <div class="items-start self-stretch flex flex-col">
                <div
                  class="self-stretch text-btn_color text-2xl font-semibold leading-10"
                >
                  {{ $t("tryApp.top") }}
                </div>
                <div
                  class="text-bg_color dark:text-white text-4xl font-bold leading-[56px] self-stretch whitespace-nowrap mt-2"
                >
                  {{ $t("tryApp.title") }}
                </div>
              </div>
              <div
                class="text-text_color dark:text-white text-base font-medium leading-6 self-stretch mt-6"
              >
                {{ $t("tryApp.footer") }}
              </div>
            </div>
            <div
              class="items-start flex w-[340px] max-w-full gap-4 mt-12 self-start max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d84d147c-3c5a-41b2-827b-8df46df02f34?"
                class="aspect-[3.38] object-contain object-center w-full overflow-hidden flex-1"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90f8094d-3cf8-4da8-ae7b-c6b7ad77ab30?"
                class="aspect-[3.38] object-contain object-center w-full overflow-hidden flex-1"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[20%] ml-5 max-md:ml-0">
          <div
            class="flex-col overflow-hidden aspect-[0.49] relative flex grow pl-2.5 pr-2.5 py-2.5"
          >
            <img
              loading="lazy"
              src="@/assets/images/app.png"
              class="absolute h-full w-full object-cover object-center inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
