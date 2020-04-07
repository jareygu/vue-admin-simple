<template>
  <div class="dashboard-container">
    <h3>{{ msg }}</h3>
    <h3>{{ text }}</h3>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})

@Component({
  components: {}
})

export default class App extends AppProps {

  msg: number = 123;
  text: string = 'hello'

  mounted() {
    this.greet();
  }
  // computed:计算属性改为前面加get关键字
  get computedMsg() {
    return "computed " + this.msg;
  }
  // method：方法直接以类方法形式书写
  greet() {
      // console.log(this.text)
  }
  // 动态组件
  // $refs!: {
  //   helloComponent: Hello;
  // };
}
</script>