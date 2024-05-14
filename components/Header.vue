<template>
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
          {{$t("hero-head")}} 
    
            <span class="sm:block"> {{$t("hero-span")}}  </span>
          </h1>
    
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {{$t("hero-para")}} 
          </p>
    
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-blue-600 bg-yellow-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
            {{$t("cta-one")}} 
            </a>
    
            <a
              class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
            {{$t("cta-two")}} 
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>