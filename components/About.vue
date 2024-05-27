<template>
    <section class="py-6" id="about" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up">
      <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-stone-500	p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-2xl font-bold text-yellow-400 md:text-3xl">
                {{$t("lvPanel")}} 
              </h2>
    
              <p class="hidden text-white/90 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                volutpat quisque ut interdum tincidunt duis.
              </p>
    
              <div class="mt-4 md:mt-8">
                <a
                  href="#"
                  class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-yellow-400 transition hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                {{$t("lvstarted")}} 
                </a>
              </div>
            </div>
          </div>
    
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src="/public/car-mechanic-repairs-car-garage-with-tools.jpg"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
    
            <img
              alt=""
              src="/public/view-exposed-plumbing-pipes.jpg"
               class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  </template>

<script setup>

</script>

<style lang="scss" scoped>

</style>