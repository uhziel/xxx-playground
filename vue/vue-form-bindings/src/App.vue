<script>
export default {
  data() {
    return {
      text: "hello",
      checked: true,
      checkedNames: ["Mike"],
      picked: "one",
      selected: "A",
      multiSelected: [],
    }
  }
}
</script>

<template>
<h2>Text Input</h2>
<input id="textinput" v-model="text"><label for="textinput">{{ text }}</label>
<h2>Checkbox</h2>
<input id="checkbox" type="checkbox" v-model="checked"><label for="checkbox">checked: {{ checked }}</label>
<h2>Multi Checkbox</h2>
<input id="jack" type="checkbox" value="Jack" v-model="checkedNames"><label for="jack">Jack</label>
<input id="john" type="checkbox" value="John" v-model="checkedNames"><label for="john">John</label>
<input id="mike" type="checkbox" value="Mike" v-model="checkedNames"><label for="mike">Mike</label>
<p>checked names:</p>
<pre>
{{ checkedNames }}
</pre>
<h2>Radio</h2>
<input id="one" type="radio" value="one" v-model="picked"><label for="one">One</label>
<input id="two" type="radio" value="two" v-model="picked"><label for="two">Two</label>
<p>picked:{{ picked }}</p>
<h2>Select</h2>
<select v-model="selected">
  <option disabled>Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<p>Selected: {{ selected }}</p>
<h2>Multi Select</h2>
<select v-model="multiSelected" multiple style="width: 100px;">
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<p>Selected: {{ multiSelected }}</p>
</template>
