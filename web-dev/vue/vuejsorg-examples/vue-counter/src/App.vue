<script>
export default {
  data() {
    return {
      count: 0,
    }
  }
}
</script>

<template>
{{ count }}
<button @click="count+=1">add 1</button>
</template>
