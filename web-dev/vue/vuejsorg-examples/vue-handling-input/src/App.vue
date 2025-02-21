<script lang="ts">
export default {
  data() {
    return {
      message: "hello world",
    }
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('')
    },
    tip() {
      alert("you click a link with e.preventDefault()!")
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="reverse">Reverse Message</button>
  <br>
  <button @click="message += '!'">Append "!"</button>
  <br>
  <a href="http://example.com" @click.prevent="tip">A link with e.preventDefault()</a>
  <br>
</template>
