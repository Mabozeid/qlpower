<template>
    <div class="language-selector pb-1 border-slate-200	rounded-xl">
      <select v-model="selectedLanguage" @change="changeLanguage" class="mt-1.5 w-full sm:text-sm">
        <option class=" text-bold" v-for="locale in supportedLocales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
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
    beforeMount(){
      const locale = localStorage.getItem('selectedLanguage') || 'en';
      this.selectedLanguage = locale
      this.$i18n.locale = locale;
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
  .language-selector{
    border:1px solid #eee;
    border-radius: 10px;
  }

  </style>
  