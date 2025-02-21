<script>
export default {
  data() {
    return {
      c: 0,
      f: 32,
    }
  },
  methods: {
    setC(c) {
      this.c = c
      this.f = c * (9 / 5) + 32
    },
    setF(f) {
      this.f = f
      this.c = (f - 32) * (5 / 9)
    }
  }
}
</script>

<template>
<input id="c" :value="c" @change="setC(+($event.target.value))"><label for="c">Celsius</label>=
<input id="f" :value="f" @change="setF(+($event.target.value))"><label for="f">Fahrenheit</label>
</template>
