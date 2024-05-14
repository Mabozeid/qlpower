
<template>
<div  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
   <Navbar />
</div>
   <div>
    <slot />
   </div>
 </template>
<script setup>

</script>

<style lang="scss" scoped>

</style>