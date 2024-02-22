<template>
  <div
    class="w-full flex flex-col justify-center items-center my-24 container mx-auto"
  >
    <div
      class="items-center self-center flex w-[630px] max-w-full flex-col px-5 max-md:mt-10"
    >
      <div
        class="items-center self-stretch flex flex-col -mr-5 max-md:max-w-full"
      >
        <div
          class="self-stretch text-emerald-500 text-center text-2xl font-semibold max-md:max-w-full"
        >
          {{ $t("whyUs.top") }}
        </div>
        <div
          class="self-stretch text-slate-800 dark:text-white text-center text-4xl font-bold mt-2 max-md:max-w-full"
        >
          {{ $t("whyUs.title") }}
        </div>
      </div>
      <div
        class="text-zinc-500 dark:text-white text-center text-base font-medium self-center max-w-[480px] mt-6 max-md:max-w-full"
      >
        {{ $t("whyUs.footer") }}
      </div>
    </div>
    <div
      class="self-center w-full max-w-[1260px] mt-14 px-5 max-md:max-w-full max-md:mt-10"
    >
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div
          class="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
        >
          <div class="flex grow flex-col max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5e990fe-9bb6-4747-898d-c88f55fe2661?"
              class="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
            />
            <div
              class="text-slate-800 dark:text-white text-center text-lg font-bold leading-6 self-center max-w-[289px] mt-3.5"
            >
              {{ $t("whyUs.case1.title") }}
            </div>
            <div
              class="text-zinc-500 dark:text-white text-center text-sm font-medium leading-5 self-stretch mt-4"
            >
              {{ $t("whyUs.case1.body") }}
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
        >
          <div class="flex grow flex-col max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ced9404-62d1-48fa-bb32-609129eadcdd?"
              class="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
            />
            <div
              class="text-slate-800 dark:text-white text-center text-lg font-bold leading-6 self-center max-w-[289px] mt-3.5"
            >
              {{ $t("whyUs.case2.title") }}
            </div>
            <div
              class="text-zinc-500 dark:text-white text-center text-sm font-medium leading-5 self-stretch mt-4"
            >
              {{ $t("whyUs.case2.body") }}
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0"
        >
          <div class="flex grow flex-col max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21aeb19d-f7ef-4fb5-a4c2-3bbfd4e6b3a6?"
              class="aspect-square object-contain object-center w-12 overflow-hidden self-center max-w-full"
            />
            <div
              class="text-slate-800 dark:text-white text-center text-lg font-bold leading-6 self-center max-w-[289px] mt-3.5"
            >
              {{ $t("whyUs.case3.title") }}
            </div>
            <div
              class="text-zinc-500 dark:text-white text-center text-sm font-medium leading-5 self-stretch mt-4"
            >
              {{ $t("whyUs.case3.body") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
