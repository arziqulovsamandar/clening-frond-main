<template>
  <div class="bg-big_color min-h-[500px] dark:bg-bg_dark">
    <div class="container mx-auto pt-20">
      <div class="float-left mr-20">
        <video
          v-if="type === 'video'"
          :src="single_service?.url"
          controls
          width="560"
          height="340"
          style="border-radius: 12px"
        ></video>
        <img
          v-else-if="type === 'image'"
          :src="single_service?.url"
          class="w-[560px] h-[340px] rounded-[12px] object-cover"
          alt="img"
        />
        <iframe
          v-else-if="type === 'youtube'"
          width="560"
          height="340"
          style="border-radius: 12px"
          :src="single_service?.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>
        <div v-else class="w-1/2 h-[340px] flex justify-center items-center">
          <span class="text-[48px] text-bg_color dark:text-plh_color"
            >Unsupported media format</span
          >
        </div>
      </div>
      <p class="text-text_color text-base text-justify dark:text-white">
        <span
          class="text-bg_color text-xl font-semibold leading-10 dark:text-white capitalize"
          >{{ single_service[`name_${lang}`] }}</span
        >
        <br />{{ single_service[`description_${lang}`] }}
      </p>
    </div>
  </div>
  <div class="container mx-auto" v-if="related?.length">
    <h2
      class="text-bg_color dark:text-white text-2xl font-bold w-full text-center mt-14 mb-8"
    >
      {{ $t("nav.related") }}
    </h2>
    <div class="flex flex-wrap gap-5">
      <service-card
        v-for="service in related"
        :key="service?.id"
        :service="service"
      />
    </div>
  </div>
  <div class="container mx-auto">
    <h2
      class="text-bg_color dark:text-white text-2xl font-bold w-full text-center mt-14 mb-8"
    >
      {{ $t("nav.other") }}
    </h2>
    <div class="flex flex-wrap gap-5">
      <service-card
        v-for="service in services"
        :key="service?.id"
        :service="service"
      />
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "@/components/ui/ServiceCard.vue";
import { categoryStore } from "@/stores/user/category";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = categoryStore();
const related = ref([]);
const services = ref([]);
const single_service = ref({});
const type = ref("");
const lang = localStorage.getItem("lang");

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

router.afterEach((to, from, next) => {
  if (to.params.id) window.location.reload();
  next();
});

onMounted(async () => {
  single_service.value = await store.getService(route?.params?.id);
  type.value = isVideoOrImageOrYoutubeLink(single_service.value?.url);
  related.value = await store.getCategoryServices(route?.params?.id);
  services.value = await store.getServices();
  services.value = services.value.filter(
    (item) => item?.id != route.params?.id
  );
});
</script>

<style lang="scss" scoped></style>
