<script>
function clone(circles) {
  return circles.map((circle) => ({...circle}))
}

const defaultR = 20

export default {
  data() {
    return {
      selected: null,
      history: [[]],
      idx: 0,
      circles: [],
      adjusting: false,
    }
  },
  methods: {
    push() {
      this.history.length = this.idx+1
      this.history.push(clone(this.circles))
      this.idx++
    },
    undo() {
      this.idx--
      this.circles = clone(this.history[this.idx])
    },
    redo() {
      this.idx++
      this.circles = clone(this.history[this.idx])
    },
    adjust(circle) {
      this.adjusting = true
      this.selected = circle
    },
    onclick({clientX: x, clientY: y}) {
      if (this.adjusting) {
        this.adjusting = false
        this.selected = null
        this.push()
        return
      }
      console.log("click:", x, y)
      this.circles.push({x: x, y: y, r: defaultR})
      this.push()
      this.selected = null
    },
  }
}
</script>

<template>
<svg @click="onclick">
  <circle v-for="circle in circles"
    :cx="circle.x" :cy="circle.y" :r="circle.r" :fill="selected === circle ? '#ccc': '#000'"
    @click.stop="selected = circle" @contextmenu.prevent="adjust(circle)"></circle>
</svg>
<div>
  <button :disabled="idx === 0" @click="undo">Undo</button>
  <button :disabled="idx === history.length-1" @click="redo">Redo</button>
</div>
<p>Click on the canvas to draw a circle. Click on a circle to select it.</p>
<p>Right-click on the canvas to adjust the radius of the selected circle.</p>
<div v-if="adjusting">
  <p>Adjust radius of circle at ({{ selected.x }}, {{ selected.y }})</p>
  <input type="range" min="1" max="100" v-model="selected.r">
</div>
</template>

<style>
body {
  margin: 0px;
}
</style>
