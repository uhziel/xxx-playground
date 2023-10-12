<script>
import { marked } from 'marked'
import { debounce } from 'lodash-es'

export default {
  data() {
    return {
      md: "# hello",
      html: "",
    }
  },
  computed: {
    html() {
      return marked(this.md)
    }
  },
  methods: {
    update: debounce(function (e) {
      this.md = e.target.value
    }, 1000)
  }
}
</script>

<template>
  <div class="input">
    <textarea :value="md" @input="update"></textarea>
  </div>
  <div class="output" v-html="html"></div>
</template>
