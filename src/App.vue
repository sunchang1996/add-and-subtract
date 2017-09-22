<template>
  <div id="app">
    <div>
      {{count}}
      <button @click="add">增加</button>
    </div>
    <Hello></Hello>
    {{computeCount}}
  </div>
</template>
<script>
import {mapState,mapActions, mapGetters} from 'vuex'
import Hello from '@/components/Hello.vue'
export default { 
  name: 'app',
  components:{
    Hello
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['computeCount'])
  },
  methods: {
    ...mapActions(['increment']),
    add(){
      this.increment(2)
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
</style>
