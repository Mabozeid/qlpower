<template>
    
   <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Header />
    </div>

    <About />
    
    <Services />
     <!-- <Swiper /> -->
</template>

<script setup>
import Services from '~/components/Services.vue';

</script>

<style lang="scss" scoped>

</style>