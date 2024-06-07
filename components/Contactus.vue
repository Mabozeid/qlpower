<template>
    <div>
      <form @submit.prevent="sendEmail">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      }
    },
    methods: {
      async sendEmail() {
        try {
          await this.$axios.post('/api/email', {
            name: this.name,
            email: this.email,
            message: this.message,
          })
          alert('Email sent successfully!')
        } catch (error) {
          console.error('Failed to send email:', error)
          alert('Failed to send email.')
        }
      },
    },
  }
  </script>
  