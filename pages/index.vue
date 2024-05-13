<template>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
     <p class="font-bold">{{ $t("welcome") }}</p>
     <h1>{{ $t("home") }}</h1>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>