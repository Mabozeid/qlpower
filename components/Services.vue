<template>
    <section class="bg-gray-100 text-yellow-500" data-aos="fade-up" id="services" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-slate-900">{{$t("maintenance-service")}}</h2>
    
          <p class="mt-4 text-stone-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>
    
        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="generators" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">Generators</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
    
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="hvacSystem" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">HVAC Systems</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
    
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="pumps" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">Pumps</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
    
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="transforms" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">Transformers</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
    
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="lightCurrent" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
            <h2 class="mt-4 text-xl font-bold text-yellow-500">Light Current</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
    
          <a
            class="block rounded-xl border border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 bg-white"
            href="#"
          >
          <img :src="airCompressors" alt="My Icon"  class="size-12 rounded-lg inline-block"/>
    
            <h2 class="mt-4 text-xl font-bold text-yellow-500">Air Compressors</h2>
    
            <p class="mt-1 text-sm text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
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

<style lang="scss" scoped>

</style>