<template>
    
   <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Header />
    </div>

    <About />
    
    <Services />
    <!-- <Testimonials /> -->

     <!-- <Swiper /> -->
   <Contact />
</template>

<script setup>
import Services from '~/components/Services.vue';

</script>

<style lang="scss" scoped>

</style>