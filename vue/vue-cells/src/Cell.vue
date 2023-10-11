<script>
import {cells, evalCell} from './store.js'

export default{
    props: {
        c: Number,
        r: Number,
    },
    data() {
        return {
            editing: false,
            cells,
        }
    },
    methods: {
        update(e) {
            this.editing = false
            cells[this.c][this.r] = e.target.value.trim()
        },
        evalCell
    }
}
</script>

<template>
    <div @click="editing = true">
        <input
            v-if="editing"
            :value="cells[c][r]"
            @change="update"
            @blur="update"
            @vue:mounted="({ el }) => el.focus()">
        <span v-else>{{ evalCell(cells[c][r]) }}</span>
    </div>
</template>

<style scoped>
div {
    height: 1.5em;
}
</style>