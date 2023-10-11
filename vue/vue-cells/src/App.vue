<script>
import {cells} from './store.js'
import Cell from './Cell.vue'

export default {
    components: {
        Cell,
    },
    data() {
        return {
            cols: cells.map((_, i) => String.fromCharCode(65 + i)),
            cells,
        }
    },
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th></th>
                <th v-for="col in cols">{{ col }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="y in cells[0].length">
                <th>{{ y - 1 }}</th>
                <td v-for="(col, x) in cols">
                    <Cell :r="y - 1" :c="x"></Cell>
                </td>
            </tr>
        </tbody>
    </table>
</template>
