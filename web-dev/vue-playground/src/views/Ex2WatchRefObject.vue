<script setup lang="ts">
import { ref, watch } from 'vue';

const loading = ref(false)
const err = ref("")
const data = ref("")

const url = ref({ addr: "https://httpbin.org/get" })

watch(url, async () => {
  try {
    loading.value = true
    err.value = ""
    data.value = ""

    const resp = await fetch(url.value.addr)
    data.value = await resp.text()
  } catch (e) {
    err.value = (e as Error).message
  } finally {
    loading.value = false
  }
}, { immediate: true })

setTimeout(() => {
  console.log("timer done")
  // 下面的会触发再次执行 watch
  url.value = { addr: "https://httpbin.org/robots.txt" }
  // 下面的不会触发执行再次执行 watch
  //url.value.addr = "https://httpbin.org/uuid"
}, 2000)

</script>

<template>
  <div v-if="loading">loading</div>
  <div v-else-if="err">{{ err }}</div>
  <pre v-else>{{ data }}</pre>
</template>
