<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const loading = ref(false)
const err = ref("")
const data = ref("")

const url = ref("https://httpbin.org/get")

watchEffect(async () => {
  try {
    loading.value = true
    err.value = ""
    data.value = ""

    const resp = await fetch(url.value)
    data.value = await resp.text()
  } catch (e) {
    err.value = (e as Error).message
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div v-if="loading">loading</div>
  <div v-else-if="err">{{ err }}</div>
  <pre v-else>{{ data }}</pre>
</template>
