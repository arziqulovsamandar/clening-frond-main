<template>
  <div class="container mx-auto flex flex-col gap-12">
    <div
      class="items-center self-center flex w-[630px] max-w-full flex-col mt-44 px-5 max-md:mt-10"
    >
      <div
        class="self-stretch text-emerald-500 text-center text-2xl font-semibold leading-10 -mr-5 max-md:max-w-full"
      >
        {{ $t("review.top") }}
      </div>
      <div
        class="self-stretch text-slate-800 dark:text-white text-center text-4xl font-bold leading-[56px] -mr-5 mt-2 max-md:max-w-full"
      >
        {{ $t("review.title") }}
      </div>
    </div>
    <div
      class="self-center w-full max-w-screen-xl mt-14 px-5 max-md:max-w-full max-md:mt-10"
    >
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div
          class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0"
        >
          <div
            class="items-center flex grow flex-col max-md:max-w-full max-md:mt-5"
          >
            <div
              class="items-center self-stretch flex flex-col max-md:max-w-full"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0867fe1-503b-4a00-aa26-ff8b001cd94a?"
                class="aspect-square object-contain object-center w-8 overflow-hidden self-center max-w-full"
              />
              <div
                class="text-slate-800 dark:text-white text-center text-2xl font-medium leading-8 self-stretch mt-4 max-md:max-w-full"
              >
                {{ $t("review.say") }}
              </div>
            </div>
            <div
              class="items-center self-center flex w-[132px] max-w-full grow flex-col mt-6"
            >
              <div
                class="items-center self-center flex w-[74px] max-w-full flex-col"
              >
                <img
                  loading="lazy"
                  src="@/assets/images/avatar.png"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-center max-w-full rounded-full"
                />
                <div
                  class="text-zinc-500 dark:text-white text-base font-semibold leading-7 self-stretch whitespace-nowrap mt-2"
                >
                  John Doe
                </div>
              </div>
              <div
                class="items-start self-stretch flex gap-2 mt-3 max-md:justify-center"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b784b2d-b8d0-4fbc-a0a7-9215f510f6bf?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b57beb3-c5e4-4a0c-b1fe-849b8882d75a?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d935ca66-caad-4a6c-9391-0edc0af90917?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32907750-ef6a-4bfc-8458-ba6abd526635?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/558e460a-07af-4eab-8d7f-28eb54c9cda6?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0"
        >
          <div
            class="items-center flex grow flex-col max-md:max-w-full max-md:mt-5"
          >
            <div
              class="items-center self-stretch flex flex-col max-md:max-w-full"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7290ff4b-e8f9-4a53-973c-e08237049e00?"
                class="aspect-square object-contain object-center w-8 overflow-hidden self-center max-w-full"
              />
              <div
                class="text-slate-800 dark:text-white text-center text-2xl font-medium leading-8 self-stretch mt-4 max-md:max-w-full"
              >
                {{ $t("review.say") }}
              </div>
            </div>
            <div
              class="items-center self-center flex w-[132px] max-w-full grow flex-col mt-6"
            >
              <div
                class="items-center self-center flex w-[73px] max-w-full flex-col"
              >
                <img
                  loading="lazy"
                  src="@/assets/images/avatar.png"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-center max-w-full rounded-full"
                />
                <div
                  class="text-zinc-500 dark:text-white text-base font-semibold leading-7 self-stretch whitespace-nowrap mt-2"
                >
                  Jane Doe
                </div>
              </div>
              <div
                class="items-start self-stretch flex gap-2 mt-3 max-md:justify-center"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d5fb2f-41b4-413f-9bf2-25b5bcc59b5a?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/46968542-c80f-4482-b56a-17f5218ba274?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43966f94-30e3-4dcb-8755-827ec6cc9cbc?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1de352d-0bca-497c-ad81-a50fa7011884?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                /><img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d03b92c-3147-4cfb-ad9f-8af78738de98?"
                  class="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
