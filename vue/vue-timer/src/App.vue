<script>
export default {
  data() {
    return {
      elapsed: 0.0,
      duration: 10,
      min: 0,
      max: 30,
    }
  },
  created() {
    this.reset()
  },
  unmounted() {
    cancelAnimationFrame(this.requestId)
  },
  methods: {
    reset() {
      this.elapsed = 0.0
      this.start = performance.now()
      this.update()
    },
    update() {
      this.elapsed = (performance.now() - this.start) / 1000
      if (this.elapsed >= this.duration) {
        cancelAnimationFrame(this.requestId)
      } else {
        this.requestId = requestAnimationFrame(this.update)
      }
    }
  }
}
</script>

<template>
  <div>
    <label for="elapsed">Elapsed Time:</label>
    <progress id="elapsed" :max="duration" :value="elapsed"></progress>
    <span>{{ elapsed.toFixed(1) }}s</span>
  </div>
  <div>
    <label for="duration">Duration:</label>
    <input id="duration" type="range" :min="min" :max="max" v-model="duration">
    <span>{{ duration }}s</span>
  </div>
  <button @click="reset">Reset</button>
</template>
