<script>

function date2string(d) {
  return d.getFullYear() + "-" +
    pad(d.getMonth()+1) + '-' +
    pad(d.getDate())
}

function string2date(s) {
  return new Date(s)
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}`: s
}

export default {
  data() {
    return {
      selected: "one-way",
      from: "",
      to: "",
    }
  },
  computed: {
    isTwoWay() {
      return this.selected === "two-way"
    },
    canBook() {
      if (!this.isTwoWay) {
        return true
      }
      return string2date(this.from) <= string2date(this.to)
    }
  },
  methods: {
    book() {
      if (this.isTwoWay) {
        alert(`two-way: ${this.from} - ${this.to}`)
      } else {
        alert(`one-way: ${this.from}`)
      }
    }
  },
  created() {
    this.from = date2string(new Date())
    this.to = date2string(new Date())
  }
}
</script>

<template>
  <select v-model="selected">
    <option value="one-way">One-way flight</option>
    <option value="two-way">Two-way flight</option>
  </select>
  <input type="date" id="from" v-model="from">
  <input type="date" id="to" v-model="to" :disabled="!isTwoWay">
  <button @click="book" :disabled="!canBook">Book</button>
  <p v-if="!canBook">错误：返回时间在出发时间之前</p>
</template>

<style>
select, input, button {
  display: block;
  margin: 5px;
}
p {
  color: red
}
</style>