<template>
  <client-only>
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <SwiperSlide>
        <img
              alt=""
              src="/public//Business-Line-FLS-2-1-1024x786.png"
              class="h-auto w-full object-cover sm:h-56 md:h-full"
            />
      </SwiperSlide>
      <swiper-slide>
        <img
              alt=""
              src="/public/blizzard-cooling-image-25-1000x1000.jpg"
              class="h-auto w-full object-cover sm:h-56 md:h-full"
            />
      </swiper-slide>
      <swiper-slide>
        <img
              alt=""
              src="/public/electrician-changes-the-light-bulb-handyman-G5K7XVM.jpg"
              class="h-auto w-full object-cover sm:h-56 md:h-full"
            />
      </swiper-slide>
    </Swiper>
  </client-only>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; 
</script>