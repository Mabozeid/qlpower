<template>
    
   <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Header />
    </div>

    <Ourvision />
    
    <Stats />

   <Services />

   <Masnory />

   <Cta />

   <div>
   <Goals />
   </div>
   <Swiper />


   <Contact />
</template>

<script setup>
</script>
