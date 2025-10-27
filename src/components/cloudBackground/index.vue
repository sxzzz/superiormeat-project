<template>
  <div v-if="showClouds" class="fixed inset-0 overflow-hidden pointer-events-none z-10">
    <div
        v-for="n in 5" :key="n"
        class="absolute w-32 h-20 bg-white rounded-full opacity-70 cloud"
        :style="generateCloudStyle(n)"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWeatherStore } from '/src/store/weather.js'

const weatherStore = useWeatherStore()

// 判断是否要显示云朵
const weatherDesc = computed(() => {
  return weatherStore.weatherData?.current_condition?.[0]?.weatherDesc?.[0]?.value?.toLowerCase() || ''
})

const showClouds = computed(() => {
  return weatherDesc.value.includes('cloudy') || weatherDesc.value.includes('overcast') || weatherDesc.value.includes('drizzle')
})

// 生成每朵云的位置和动画
function generateCloudStyle(n) {
  const top = Math.random() * 80 // 0%-80%高的位置
  const delay = Math.random() * 10 // 每朵云的延迟
  const scale = 0.8 + Math.random() * 0.6 // 云朵大小变化
  return {
    top: `${top}%`,
    left: '-20%',
    transform: `scale(${scale})`,
    animation: `moveClouds ${20 + Math.random() * 20}s linear infinite`,
    animationDelay: `${delay}s`
  }
}
</script>

<style scoped>
@keyframes moveClouds {
  0% {
    transform: translateX(0) scale(var(--tw-scale-x));
  }
  100% {
    transform: translateX(120vw) scale(var(--tw-scale-x));
  }
}
.cloud {
  background: linear-gradient(white, #f0f0f0);
  filter: blur(1px);
}
</style>