<template>
  <div class="container mx-auto flex justify-center items-center gap-20 mt-32">
    <div class="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1699331635938!5m2!1sen!2s"
        width="600"
        height="350"
        style="border: 0; border-radius: 20px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="flex flex-col w-fit max-md:mt-10">
      <div class="self-stretch flex items-start justify-start gap-3">
        <img
          loading="lazy"
          src="@/assets/icons/mail.png"
          class="aspect-[1.47] object-contain object-center w-[47px] overflow-hidden self-start max-w-full my-auto"
        />
        <div class="self-stretch flex flex-col">
          <div
            class="text-slate-700 dark:text-white text-2xl leading-7 self-stretch"
          >
            {{ $t("contact.email") }}
          </div>
          <div
            class="text-slate-500 dark:text-plh_color text-sm leading-6 self-stretch mt-1.5"
          >
            contact@tozamakon.com
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex items-start justify-start gap-3 mt-16 max-md:mt-10"
      >
        <img
          loading="lazy"
          src="@/assets/icons/phone.png"
          class="aspect-[0.96] object-contain object-center w-12 overflow-hidden self-stretch max-w-full"
        />
        <div class="self-center flex flex-col my-auto">
          <div
            class="text-slate-700 dark:text-white text-2xl leading-7 self-stretch"
          >
            {{ $t("contact.phone") }}
          </div>
          <div
            class="text-slate-500 dark:text-plh_color text-sm leading-6 self-stretch mt-1.5"
          >
            +998 90 123 45 67 - Office
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex items-start justify-start gap-3 mt-16 max-md:mt-10"
      >
        <img
          loading="lazy"
          src="@/assets/icons/location.png"
          class="aspect-[0.96] object-contain object-center w-12 overflow-hidden self-stretch max-w-full"
        />
        <div class="self-center flex flex-col my-auto">
          <div
            class="text-slate-700 dark:text-white text-2xl leading-7 self-stretch"
          >
            {{ $t("contact.address") }}
          </div>
          <div
            class="text-slate-500 dark:text-plh_color text-sm leading-6 self-stretch mt-1.5"
          >
            268 Yuksalish, Chilonzor, Tashkent
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
