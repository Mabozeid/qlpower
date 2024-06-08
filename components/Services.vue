<template>
    <section class="bg-gray-50 text-yellow-500 border border-slate-300" data-aos="fade-up" id="services" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-yellow-500">{{$t("maintenance-service")}}</h2>
    
          <p class="mt-4 text-stone-500">
            {{$t("maintenance-para")}}
          </p>
        </div>
    
        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
            <div class="Service-img-box">
              <img :src="generators" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
            </div>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">{{$t("generators")}}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{$t("generator-para")}}
            </p>
          </a>
    
          <a
            class="serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <div class="Service-img-box">
            <img :src="hvacSystem" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
            </div>
            <h2 class="mt-4 text-xl font-bold text-yellow-500">{{ $t("hvacsystem") }}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{$t("hvacsystem-para")}}
            </p>
          </a>
    
          <a
            class=" serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <div class="Service-img-box">
            <img :src="pumps" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
          </div>
            <h2 class="mt-4 text-xl font-bold text-yellow-500">{{ $t("pumps") }}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{ $t("pumps-para") }}
            </p>
          </a>
    
          <a
            class=" serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <div class="Service-img-box">
            <img :src="transforms" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
          </div>
            <h2 class="mt-4 text-xl font-bold text-yellow-500">{{ $t("transformers") }}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{ $t("transformers-para") }}
            </p>
          </a>
    
          <a
            class="serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <div class="Service-img-box">
           <img :src="lightCurrent" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
          </div>

            <h2 class="mt-4 text-xl font-bold text-yellow-500"> {{ $t("lightcurrent") }}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{ $t("lightcurrent-para") }}
            </p>
          </a>
    
          <a
            class="serviceItem block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <div class="Service-img-box">
            <img :src="airCompressors" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
          </div>
            <h2 class="mt-4 text-xl font-bold text-yellow-500"> {{ $t("aircompressors") }}</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              {{ $t("aircompressors-para") }}
            </p>
          </a>
        </div>
      </div>
    </section>
  </template>

<script setup>

import generators from '@/assets/icons/004-electric-generator.png'
import hvacSystem from '@/assets/icons/007-cold.png'
import pumps from '@/assets/icons/006-water.png'
import transforms from '@/assets/icons/005-data-transformation.png'
import lightCurrent from '@/assets/icons/001-innovation.png'
import airCompressors from '@/assets/icons/003-air-compressor.png'

</script>

<style>
.serviceItem{
  position: relative;
  z-index: 5;
}
.serviceItem .Service-img-box{
padding: 20px;
background-color: #fff;
width: fit-content;
border-radius: 100%;
}
.serviceItem::before{
  position: absolute;
    content: "";
    background: #FACC15;
    bottom: 0;
    left: 0;
    height: 0%;
    width: 100%;
    z-index: -1;
    transition: 0.5s all ease-in-out;
    border-radius: 0.5rem ;
}
.serviceItem:hover.serviceItem::before{
    height: 100%;
}
.serviceItem:hover.serviceItem h2{
    color: #fff;
    transition: 0.6s all ease-in-out;
}

</style>