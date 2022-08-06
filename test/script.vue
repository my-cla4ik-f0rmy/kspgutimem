const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')


const Test ={
  data() {
    return {
      picked: 'hello'
      
    }
  }
}

Vue.createApp(Test).mount('#v-model-radiobutton')







  