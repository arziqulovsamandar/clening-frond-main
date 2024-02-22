<template>
  <div class="bg-white flex flex-col relative">
    <div class="bg-stone-100 dark:bg-bg_dark w-full self-end max-md:max-w-full">
      <div
        class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 container mx-auto relative"
      >
        <div
          class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
        >
          <div class="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div
              class="items-start flex w-[615px] max-w-full flex-col self-start"
            >
              <div
                class="items-start flex w-[230px] max-w-full gap-1 self-start max-md:justify-center absolute top-8"
              >
                <div
                  class="text-black dark:text-white text-base font-semibold leading-4 opacity-50 self-center my-auto"
                >
                  {{ $t("about.first") }}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c721810a-6f67-44dd-9436-807f17333949?"
                  class="aspect-square object-contain object-center w-6 justify-center items-center opacity-50 overflow-hidden self-stretch max-w-full"
                />
                <div
                  class="text-slate-800 dark:text-white text-base font-semibold leading-4 self-center whitespace-nowrap my-auto"
                >
                  {{ $t("about.second") }}
                </div>
              </div>
              <div class="items-start flex flex-col max-md:max-w-full">
                <div
                  class="text-emerald-500 text-2xl font-semibold leading-10 max-md:max-w-full"
                >
                  {{ $t("about.title") }}
                </div>
                <div
                  class="text-slate-800 dark:text-white text-6xl font-bold leading-[72.24px] mt-2 max-md:max-w-full max-md:text-4xl"
                >
                  {{ $t("about.main") }}
                </div>
              </div>
              <div
                class="text-zinc-500 dark:text-plh_color text-base font-medium leading-6 mt-6 max-md:max-w-full"
              >
                {{ $t("about.footer") }}
              </div>
            </div>
            <div
              class="flex w-60 max-w-full items-start justify-between gap-5 mt-12 self-start max-md:mt-10"
            >
              <div class="flex flex-col self-start gap-2">
                <div
                  class="text-black dark:text-white text-lg font-medium leading-4 opacity-50 self-stretch whitespace-nowrap"
                >
                  {{ $t("about.clients") }}
                </div>
                <div
                  class="text-emerald-500 text-3xl font-bold leading-10 self-stretch whitespace-nowrap"
                >
                  2000+
                </div>
              </div>
              <div class="flex flex-col self-start gap-2">
                <div
                  class="text-black dark:text-white text-lg font-medium leading-4 opacity-50 self-stretch whitespace-nowrap"
                >
                  {{ $t("about.experiance") }}
                </div>
                <div
                  class="text-emerald-500 text-3xl font-bold leading-10 self-stretch whitespace-nowrap"
                >
                  10 {{ $t("about.year") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 my-20"
        >
          <iframe
            width="100%"
            height="315"
            style="border-radius: 12px"
            src="https://www.youtube.com/embed/1Bsgv6DnTiI?si=pWRh9ndOTdFm4LzY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
