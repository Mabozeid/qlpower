<template> 
    <header class="bg-yellow-200 border border-grey-400" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-stone-500 sm:text-3xl">{{$t("ctabanner")}}</h1>
    
            <p class="mt-1.5 text-sm text-gray-500">{{$t("ctainfo")}} 👍 </p>
          </div>
    
          <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              class="block rounded-lg px-5 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring"
              type="button"
            >
                <a
                class="group inline-block rounded-full bg-gradient-to-r from-yellow-200 via-stone-300 to-stone-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 border-2 border-white"
                href="#"
                >
                <span
                    class="block rounded-full bg-white px-8 text-stone-500 py-3 text-sm font-medium group-hover:bg-transparent hover:text-white"
                >
                {{$t("ctabtn")}}
                </span>
                </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  </template>