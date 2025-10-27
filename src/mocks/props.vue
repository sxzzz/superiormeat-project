<!--父传子。 props-->
<!--父组件传一个变量childName name="小明" 给子组件,子组件接收这个 prop：name 并展示出来-->
<!--父组件传一个函数sayHello 通过onHello 给子组件,子组件接收这个 prop：onHello 并展示出来-->
<!--onHello 是你给这个 prop 起的名字，可以叫任何名字，比如 onClick, handleSubmit, 等等-->

<!--Parent.vue-->
<template>
  <Child :name="childName" />

  <Child :onHello="sayHello" />

</template>

<script setup>
import Child from './Child.vue'
const childName = '小明'
</script>

<!--child.vue-->
<template>
  <p>我是子组件，我收到的名字是：{{ name }}</p>
</template>

<script setup>
defineProps({
  name: String
})
</script>

<template>
  <button @click="onHello">点击我调用父组件的方法</button>
</template>

<script setup>
const props = defineProps({
  onHello: Function
})
props.onHello()//调用了
</script>