<script>
export default {
  data() {
    return {
      show: false,
      data: [1, 2, 3],
    }
  },
  methods: {
    toggleList() {
      this.show = !this.show
    },
    push() {
      this.data.push(this.data.length+1)
    },
    pop() {
      this.data.pop()
    },
    reverse() {
      this.data.reverse()
    }
  }
}
</script>

<template>
  <button @click="toggleList">Toggle List</button>
  <button @click="push">Push Number</button>
  <button @click="pop">Pop Number</button>
  <button @click="reverse">Reverse List</button>
  <ul v-if="show && data.length > 0">
    <li v-for="item in data" :key="item">{{ item }}</li>
  </ul>
  <p v-else-if="!show">hidden.</p>
  <p v-else>show but data is empty.</p>
</template>