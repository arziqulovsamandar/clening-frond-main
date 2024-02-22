<template>
  <div
    class="items-start border dark:border-slate-600 flex w-full max-w-[23%] flex-col p-6 rounded-[12px] mt-2"
  >
    <div class="overflow-hidden rounded-[15px]">
      <video
        v-if="type === 'video'"
        :src="service?.url"
        style="border-radius: 12px"
        class="aspect-[1.55] object-cover object-center w-full overflow-hidden self-stretch duration-300"
      ></video>
      <img
        v-else-if="type === 'image'"
        :src="service?.url"
        class="aspect-[1.55] object-cover object-center w-full overflow-hidden self-stretch hover:scale-125 duration-300"
        alt="img"
      />
      <iframe
        v-else-if="type === 'youtube'"
        width="560"
        height="340"
        style="border-radius: 12px"
        :src="service?.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
      <div v-else class="w-1/2 h-[340px] flex justify-center items-center">
        <span class="text-[48px] text-bg_color dark:text-white"
          >Unsupported media format</span
        >
      </div>
    </div>
    <div class="items-start self-stretch flex flex-col mt-4">
      <div
        class="self-stretch text-slate-800 dark:text-white text-lg font-bold leading-6 capitalize"
      >
        {{ service[`name_${lang}`] }}
      </div>
      <div
        class="self-stretch text-zinc-500 dark:text-plh_color text-sm font-medium leading-5 mt-3"
      >
        {{ service[`description_${lang}`]?.slice(0, 100) }}
      </div>
    </div>
    <div
      @click="goto(service?.id)"
      class="justify-center items-center self-stretch text-base font-semibold border flex w-full flex-col mt-4 px-20 py-3 rounded-xl border-solid text-btn_color border-btn_color max-md:px-5 hover:bg-btn_color hover:text-white duration-300 cursor-pointer"
    >
      {{ $t("btn.detail") }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const lang = localStorage.getItem("lang");
const props = defineProps({
  service: Object,
});

function isVideoOrImageOrYoutubeLink(url) {
  const videoExtensions = ["mp4", "webm", "ogg"]; // Add more video extensions if needed
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "svg"]; // Add more image extensions if needed
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

  const extension = url.split(".").pop().toLowerCase();

  if (videoExtensions.includes(extension)) {
    return "video";
  } else if (imageExtensions.includes(extension)) {
    return "image";
  } else if (youtubeRegex.test(url)) {
    return "youtube";
  } else {
    // Handle other cases or return null if it's neither image, video, nor YouTube link
    return null;
  }
}
const type = computed(() => {
  return isVideoOrImageOrYoutubeLink(props.service?.url);
});

const goto = (id) => {
  router.push({ path: `/service/${id}` });
};
</script>

<style lang="scss" scoped></style>
