<template>
    <section class="  bg-[url('/public/electrician-changes-the-light-bulb-handyman-G5K7XVM.jpg')] hero-img text-white">
      <div class="overlay"></div>
    <!-- <div>
      <video
      v-if="videoLoaded"
      controls
      preload="metadata"
      poster="/public/view-exposed-plumbing-pipes.jpg"
    >
      <source :src="videoSrc1080p" type="video/mp4" media="(min-width: 721px)">
      Your browser does not support the video tag.
    </video>
    <img
      v-else
      v-lazy="poster"
      @load="loadVideo"
      class="video-poster"
    />
  </div> -->
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center z-40 relative">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-3xl font-extrabold text-white sm:text-5xl"
          >
          {{$t("hero-head")}} 
    
            <span class="sm:block"> {{$t("hero-span")}}  </span>
          </h1>
    
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {{$t("hero-para")}} 
          </p>
    
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-white bg-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-yellow-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
            {{$t("cta-one")}} 
            </a>
    
            <a
              class="block w-full rounded border border-white px-12 py-3 bg-white text-sm font-medium text-stone-500	 hover:bg-yellow-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
            {{$t("cta-two")}} 
            </a>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
// import { ref } from 'vue';
// const poster = '/path/to/poster.jpg';
// const videoSrc1080p = '/public/6006374 People Person Caucasian 1280X720.mp4';
// const videoLoaded = ref(false);

// const loadVideo = () => {
//   videoLoaded.value = true;
// };
</script>

<style>
.video-poster {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.hero-img{
  background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    background-position: 50% 50%;
}
.overlay{
 content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 10;
  background: rgb(160 220 255);
}
</style>