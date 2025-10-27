<!--eventbus-->
<!--npm install mitt-->
<!--创建 Utils目录 - eventbus.js-->
<!--import mitt from 'mitt'-->
<!--const emitter = mitt()-->
<!--export default emitter-->

<!--  A 组件点击按钮后，通过 emitter.emit('messageEvent', ...) 发出消息-->
<template>
  <button @click="sendMessage">点我发信息给B</button>
</template>

<script setup>
//A组件
import emitter from '/Utils/eventbus.js';
const sendMessage = () => {
  emitter.emit('messageEvent', '你好，我是 A 组件发来的消息')
}
</script>

<!--  B 组件监听 'messageEvent' 事件，收到数据并显示-->
<template>
  <div>收到的信息:{{msg}}</div>
</template>

<script setup>
//B组件
import { ref, onMounted, onBeforeUnmount } from 'vue'
import emitter from '/Utils/eventbus.js';
const msg = ref('还没有收到消息');
const handleMessage = (data) => {
  msg.value = data
}
onMounted(() =>{
  emitter.on('messageEvent',handleMessage)
})
onBeforeUnmount(() =>{
  emitter.off('messageEvent',handleMessage)
})
</script>
