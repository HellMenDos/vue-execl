<template>
  <div class="about">
    <input v-model="column" type="number" placeholder="Column"/>
    <input v-model="rows" type="number" placeholder="Rows"/>
  </div>
  <input v-model="color" type="text" placeholder="Color"/>
  <div style="display:flex;flex-wrap:wrap; margin-top:10px;">
    <div v-for="(_, i) in amount" :key="i" >
      <input @focus="setColor(i)" :style="[(index == i) ? `background:${color};` : ``]">
    </div>
  </div>
</template>

<script>
  export default {
    name:"About",
    data() {
      return {
        column: 10,
        rows:10,
        color:"",
        index:0
      }
    },
    computed: {
      amount() {
        return this.column * this.rows
      }
    },
    methods: {
      setColor(number) {
        console.log(number)
        this.index = number
      }
    }
  }
</script>


