<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      Name
    </h2>
    <p>{{ name }}</p>
    <button type="button" @click="getName">
      Get Name
    </button>
  </div>
</template>

<script>
import Person from '@/contracts/person'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Dapp Example',
      name: 'Pending...'
    }
  },
  beforeCreate () {
    Person.init()
  },
  methods: {
    setName () {
      Person.setName(this.name).then(console.log)
    },
    getName () {
      Person.getName().then(name => {
        this.name = name
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
