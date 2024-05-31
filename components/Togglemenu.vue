<template>
      <div class="relative">
        <button @click="toggleMenu" class="bg-white text-white px-4 py-2 border-gray-300 ">
          <img :src="Baricon" alt="My Icon"  class="size-6 rounded-lg inline-block"/>
        </button>
      </div>
      <div v-if="isOpen" class="absolute bg-white border left-0 right-0 w-full h-auto mt-4 py-4">
        <nav aria-label="Global" class="toggleNav">
            <ul class="text-sm">
              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#about"> {{$t("about")}} </a>
              </li>
    
              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#"> {{$t("vision")}} </a>
              </li>
    
              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#services"> {{$t("services")}} </a>
              </li>

              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#services"> {{$t("our-goals")}} </a>
              </li>

              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#"> {{$t("maintenance")}} </a>
              </li>
    
              <li class="py-2">
                <a class="text-stone-500 transition hover:text-yellow-400 px-6" href="#contact"> {{$t("contact us")}} </a>
              </li>
            </ul>
          </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Baricon from '@/assets/icons/menu.png'
  const isOpen = ref(false)

  function toggleMenu() {
    isOpen.value = !isOpen.value
  }
  
  
  // function closeDropdown() {
  //   isOpen.value = false
  // }
  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  .toggleNav {
    width: 100%;
    margin-bottom: 1rem;
  }
  </style>
  
