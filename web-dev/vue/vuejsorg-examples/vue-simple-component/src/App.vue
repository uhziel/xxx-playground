<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      items: [
        {id: 1, text: "Vegetables"},
        {id: 2, text: "Cheese"},
        {id: 3, text: "Whatever else humans are supposed to eat"},
      ]
    }
  }
}
</script>

<template>
<ol>
  <TodoItem v-for="item in items" :key="item.id" :todo="item"></TodoItem>
</ol>
</template>
