<template>
  <div class="bg-big_color dark:bg-bg_dark min-h-[500px]">
    <div class="container mx-auto pt-20">
      <div
        class="float-left mr-20 border border-text_color rounded-xl overflow-hidden"
      >
        <video
          v-if="type === 'video'"
          :src="single_post?.url"
          controls
          width="560"
          height="340"
        ></video>
        <img
          v-else-if="type === 'image'"
          :src="single_post?.url"
          class="w-[560px] h-[340px] object-cover"
          alt="img"
        />
        <iframe
          v-else-if="type === 'youtube'"
          width="560"
          height="340"
          :src="single_post?.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>
        <div v-else class="w-1/2 h-[340px] flex justify-center items-center">
          <span class="text-[28px] text-bg_color"
            >Unsupported media format</span
          >
        </div>
      </div>
      <p class="text-text_color text-lg text-justify">
        <span
          class="text-bg_color dark:text-white text-xl font-semibold leading-10 capitalize"
          >{{ single_post[`title_${lang}`] }}</span
        >
        <br />{{ single_post[`content_${lang}`] }}
      </p>
    </div>
  </div>
  <div class="container mx-auto" v-if="related?.length">
    <h2
      class="text-bg_color dark:text-plh_color text-2xl font-bold w-full text-center mt-14 mb-8"
    >
      {{ $t("nav.related") }}
    </h2>
    <div class="flex flex-wrap gap-5">
      <blog-card
        v-for="service in related"
        :key="service?.id"
        :data="service"
      />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "@/components/section/BlogCard.vue";
import { postStore } from "@/stores/user/post";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const store = postStore();
const related = ref([]);
const single_post = ref({});
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
  single_post.value = await store.getPost(route?.params?.id);
  type.value = isVideoOrImageOrYoutubeLink(single_post.value?.url);
  related.value = await store.getCategoryPost(single_post.value?.category_id);
  related.value = related.value.filter(
    (item) => item?.id != single_post.value?.id
  );
});
</script>

<style lang="scss" scoped></style>
