<script>
export default {
    data() {
        return {
            filter: "",
            selected: "",
            name: "",
            surname: "",
            persons: [
                "Emil, Hans",
                "Mustermann, Max",
                "Tisch, Roman",
            ],
        }
    },
    computed: {
        filtedPersons() {
            if (this.filter.length === 0) {
                return this.persons
            }

            return this.persons.filter((person) => person.indexOf(this.filter) !== -1)
        },
        person() {
            return this.name + ", " + this.surname
        }
    },
    watch: {
        selected(val, oldVal) {
            if (val.length === 0) {
                return
            }

            [this.name, this.surname] = val.split(", ")
        }
    },
    methods: {
        create() {
            if (this.name.length === 0 || this.surname.length === 0) {
                console.log("create fail, length is zero.")
                return
            }

            this.persons.push(this.person)
        },
        update() {
            if (this.selected.length === 0) {
                console.log("没有选中，无法更新")
                return
            }

            const idx = this.persons.indexOf(this.selected)
            if (idx === -1) {
                console.log("没找到选中的值，无法更新")
            }

            this.persons[idx] = this.person
        },
        del() {
            if (this.selected.length === 0) {
                console.log("没有选中，无法删除")
                return
            }

            const idx = this.persons.indexOf(this.selected)
            if (idx === -1) {
                console.log("没找到选中的值，无法删除")
            }
            this.persons.splice(idx, 1)
            this.selected = ""
            this.name = ""
            this.surname = ""
        },
    }
}
</script>

<template>
    <input v-model="filter" placeholder="Filter prefix">
    <div>
        <select size="5" v-model="selected">
            <option v-for="person in filtedPersons" :key="person">{{ person }}</option>
        </select>
    </div>
    <div>
        <label for="name">Name:</label><input id="name" v-model="name">
        <label for="surname">Surname:</label><input id="surname" v-model="surname">
    </div>

    <div>
        <button @click="create">Create</button>
        <button @click="update">Update</button>
        <button @click="del">Delete</button>
    </div>
</template>
