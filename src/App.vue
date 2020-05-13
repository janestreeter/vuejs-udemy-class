<template>
  <div id="app">
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    <p>turd: {{ counter }}</p>
    <p>Result: {{ res() }} | {{ ouput }}</p>
    <p>Second Counter: {{ secondCounter }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      counter : 0,
      secondCounter: 0,
    }
  },
  computed:  {
    output: function() {
      console.log('computed');
      return this.counter  >  5 ? 'Greater' : 'Smaller than 5'; 
    },
  },
  methods: {
    res: function () {          
        return this.counter  >  5 ? 'Greater' : 'Smaller';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
