<template>
      <section class="bg-gray-50 text-yellow-500 border border-slate-300" data-aos="fade-up" id="goals" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-yellow-500">{{$t("ourGoals")}}</h2>
    
          <p class="mt-4 text-stone-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>
        <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-400 rounded-md">
              <img :src="certificate" class="h-8" alt="certificate"/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          {{$t("goal1")}}
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-400 rounded-md">
              <img :src="safety" class="h-8" alt="safety"/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          {{$t("goal2")}}
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-400 rounded-md">
              <img :src="selling" class="h-8" alt="selling"/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
          {{$t("goal3")}}
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>

      </div>
    </section>
    <!-- <div class=" sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

        </div>
      </div>
    </div> -->
  </template>
  
  <script setup>
import certificate  from '@/public/svg/certificate-outline-badged-svgrepo-com.svg'
import safety  from '@/public/svg/safety-certificate-svgrepo-com.svg'
import selling  from '@/public/svg/sell-product-svgrepo-com.svg'

  </script>