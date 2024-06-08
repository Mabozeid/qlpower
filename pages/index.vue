<template>
    
   <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Header />
    </div>

    <Ourvision />
    
    <Stats />

   <Services />

   <Masnory />

   <div>
   <Goals />
   </div>
  <Cta />


   <Contact />
</template>

<script setup>
</script>
