<script>
export default {
  data() {
    return {
      message: "hello world",
      isRed: true,
      color: 'green',
    }
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed
    },
    toggleColor() {
      this.color = (this.color === 'green' ? 'blue' : 'green')
    }
  }
}
</script>

<template>
  <p :title="message">Hover your mouse over me for a few seconds to see my dynamically bound title!</p>
  <p :class="{ red: isRed }" @click="toggleRed">This should be red... but click me to toggle it.</p>
  <p :style="{ color }" @click="toggleColor">This should be green, and should toggle between green and blue on click.</p>
</template>

<style>
.red {
  color: red;
}
</style>
