<!--子传父。 emit-->
<!--  child vue-->
<template>
  <button @click="count">click me</button>
</template>

<!--  father vue-->
<template>
  <child @sayHello = receiveHello></child>
</template>

<script setup>
//child.vue
const emit = defineEmits(['sayHello']);
const count = () =>{
  emit('sayHello','greeting from kid')
}

//father.vue
const receiveHello = (msg) => {
  const greeting = msg
  console.log(greeting)
}

// 子组件通过按钮触发 sayHello
//
// ✔ emit('sayHello', 'greeting from kid') 正确地发出事件 + 数据
//
// ✔ 父组件通过 @sayHello="receiveHello" 正确监听
//
// ✔ 子组件传的数据通过参数 msg 被父组件接收
</script>

