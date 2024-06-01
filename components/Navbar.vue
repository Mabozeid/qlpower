<template>
    <header class="bg-white border-b border-slate-200 py-2 fixed top-0 left-0 right-0 z-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a href="#" class="flex items-center rtl:space-x-reverse">
        <img
          src="/public/500NBG.png"
          alt=""
          class="size-12 rounded-lg inline-block"
          />
          <span class="self-center text-2xl font-bold whitespace-nowrap text-2xl font-bold leading-7 text-yellow-400 sm:truncate sm:text-3xl sm:tracking-tight lg:tracking-widest font-sans inline-block leading-10">QLP</span>
        </a>
        </div>
  
        <div class="hidden md:block sm:h-auto">
          <nav aria-label="Global" class="hidden md:block navVarMenu">
            <ul class="flex items-center gap-6 text-sm">

              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#ourVision"> {{$t("vision")}} </a>
              </li>
    
              <li>
                <a class="text-stone-500	 transition hover:text-yellow-400" href="#services"> {{$t("services")}} </a>
              </li>

              <li>
                <a class="text-stone-500	 transition hover:text-yellow-400" href="#services"> {{$t("our-goals")}} </a>
              </li>

              <li>
                <a class="text-stone-500	 transition hover:text-yellow-400" href="#"> {{$t("maintenance")}} </a>
              </li>
    
              <li>
                <a class="text-stone-500	 transition hover:text-yellow-400" href="#contact"> {{$t("contact us")}} </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
              <a
                class="block rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-medium transition hover:bg-stone-500 text-white"
                href="#"
              >
              {{$t("login")}}
              </a>
    
              <a
                class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-yellow-400	transition hover:text-teal-600/75 sm:block"
                href="#"
              >
              {{$t("register")}}
              </a>
            </div>
  
          <div class="block md:hidden">
          <Togglemenu />
          </div>
          <LangSwitcher />
        </div>
      </div>
    </div>
  </header>

    <div>
     <slot />
    </div>

  </template>
<script setup>
</script>

<style>
.navVarMenu a{
  font-size: 16px;
  letter-spacing: 0.25px;
  font-weight: 600;
  font-style: normal;
}
</style>