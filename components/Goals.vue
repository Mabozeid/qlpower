<template>
      <section class="bg-gray-50 text-yellow-500 border border-slate-300" data-aos="fade-up" id="goals" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-yellow-500">{{$t("ourGoals")}}</h2>
    
          <p class="mt-4 text-stone-500">
            {{$t("ourGoals-para")}}
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
          {{$t("goal1-para")}}
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
          {{$t("goal2-para")}}
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
          {{$t("goal3-para")}}
        </p>
    </div>
</div>

      </div>
    </section>
  </template>
  
  <script setup>
import certificate  from '@/public/svg/certificate-outline-badged-svgrepo-com.svg'
import safety  from '@/public/svg/safety-certificate-svgrepo-com.svg'
import selling  from '@/public/svg/sell-product-svgrepo-com.svg'

  </script>