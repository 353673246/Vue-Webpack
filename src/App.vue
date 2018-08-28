<template>
  <div class="app">
    <p>
      {{ value }}
      <myComponent></myComponent>  
    </p>
  </div>
</template>

<script>
import myComponent from './components/MyComponent.vue'
import "./style/app.scss"
export default {
  data(){
    return {
      value:12345
    }
  },
  components:{
      myComponent
  }
}
</script>

<style lang="scss">
.app{
    p{
      font-size: 100px;
    color:red
    }
    
  
  
}
</style>
