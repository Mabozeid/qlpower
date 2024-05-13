<template>
    <div class="language-selector">
      <select v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="locale in supportedLocales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedLanguage: this.$i18n.locale,
        supportedLocales: this.$i18n.locales
      };
    },
    methods: {
      changeLanguage() {
        console.log('Selected Language:', this.selectedLanguage);
        this.$i18n.locale = this.selectedLanguage;
        // Optionally, store the selected language in local storage or a cookie
        localStorage.setItem('selectedLanguage', this.selectedLanguage);
      },
      logTranslation(key) {
    console.log('Translation Key:', key);
    return this.$t(key);
  }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles for the language selector here */
  </style>
  