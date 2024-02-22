<template>
  <div class="container mx-auto mt-5">
    <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div
        class="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0 border border-text_color p-2 rounded-md"
      >
        <div class="flex grow flex-col max-md:mt-7 overflow-hidden rounded-md">
          <a :href="`/blog/${data?.id}`">
            <video
              v-if="type === 'video'"
              :src="data?.url"
              style="border-radius: 12px"
              class="aspect-[1.55] object-cover object-center w-full overflow-hidden self-stretch duration-300"
            ></video>
            <img
              v-else-if="type === 'image'"
              :src="data?.url"
              class="aspect-[1.55] object-cover object-center w-full overflow-hidden self-stretch hover:scale-125 duration-300"
              alt="img"
            />
            <iframe
              v-else-if="type === 'youtube'"
              width="560"
              height="340"
              style="border-radius: 12px"
              :src="data?.url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
            <div
              v-else
              class="aspect-[1.55] object-cover object-center w-full overflow-hidden self-stretch hover:scale-125 duration-300 flex justify-center items-center"
            >
              <span class="text-[18px] text-bg_color"
                >Unsupported media format</span
              >
            </div>
          </a>
        </div>
        <div
          class="justify-center text-neutral-800 dark:text-plh_color text-xl leading-7 mt-5 capitalize"
        >
          {{ data[`title_${lang}`] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const lang = localStorage.getItem("lang");
const props = defineProps({
  data: Object,
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
  return isVideoOrImageOrYoutubeLink(props.data?.url);
});
</script>
